"use client";
import QBox from "@/components/QBox";
import { qna } from "@/data/qna";
import { useEffect, useRef, useState } from "react";
import { FaRegQuestionCircle, FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import { updateTable } from "@/hooks/updateTable";
import { useRouter } from "next/navigation";
import { useNameContext } from "@/components/name-provider";

export default function Page() {
  const lookbackRef = useRef<number>(0);
  const lastIncrementTime = useRef<number>(0);
  const [answers, setAnswers] = useState<string[]>(Array(qna.length).fill("-"));
  const [countdown, setCountdown] = useState<number>(20 * 60); // 20 minutes in seconds
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const warningShown = useRef<number>(0);
  const router = useRouter();
  const nameContext = useNameContext();

  const onBlur = () => {
    const now = Date.now();
    if (now - lastIncrementTime.current > 1000) {
      lookbackRef.current += 1;
    }
    console.log(now, lookbackRef.current);
    lastIncrementTime.current = now;
  };

  const onBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
    toast.error("Please do not refresh or close the page during the test.");
  };

  useEffect(() => {
    window.addEventListener("blur", onBlur);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (countdown <= 5 * 60 && warningShown.current < 1) {
      toast("Only 5 minutes left!", { duration: 5000 });
      warningShown.current = 1;
    } else if (countdown <= 1 * 60 && warningShown.current < 2) {
      toast("Only 1 minute left!", { duration: 5000 });
      warningShown.current = 2;
    }

    if (countdown == 0) {
      toast.loading("Submitting your answers...");
      updateTable(
        nameContext.name,
        answers,
        lookbackRef.current,
        20 * 60 - countdown
      )
        .then((response) => {
          toast.dismiss();

          if (!response.success) {
            toast.error("Error submitting answers: " + response.message);
            setIsDisabled(false);
            return;
          }

          router.push("/thank-you");
        })
        .catch((error) => {
          toast.dismiss();
          toast.error("Error submitting answers: " + error.message);
          setIsDisabled(false);
        });
    }

    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    if (nameContext.name === "") {
      router.push("/");
    }
  }, [router, nameContext.name]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="flex flex-col justify-center items-center space-y-10 my-[20dvh]">
      <div className="fixed top-0 right-0 p-4 z-10">
        <p className="font-semibold">Questions</p>
        <ol>
          {qna.map((_, index) => (
            <li key={index} className="pl-4 flex items-center">
              {answers[index] === "-" ? (
                <FaRegQuestionCircle className="mr-2" />
              ) : (
                <FaCheck className="mr-2 text-[#4CAF50]" />
              )}
              <p>Question {index + 1}</p>
            </li>
          ))}
          <p className="font-semibold">Time Left: </p>
          <p
            className={`${countdown < 5 * 60 && "text-amber-600"} ${
              countdown < 60 && "text-red-600"
            } `}
          >
            {String(minutes).padStart(2, "0")} minutes{" "}
            {String(seconds).padStart(2, "0")} seconds
          </p>
        </ol>
      </div>
      {qna.map((item, index) => (
        <QBox
          key={index}
          no={index + 1}
          question_id={item.id}
          question={item.question}
          choices={item.choices}
          setAnswers={setAnswers}
        />
      ))}
      <button
        onClick={async () => {
          setIsDisabled(true);
          if (answers.includes("-")) {
            toast.error("Please answer all questions before submitting.");
            setIsDisabled(false);
            return;
          }

          toast.loading("Submitting your answers...");
          const response = await updateTable(
            nameContext.name,
            answers,
            lookbackRef.current,
            20 * 60 - countdown
          );
          toast.dismiss();

          if (!response.success) {
            toast.error("Error submitting answers: " + response.message);
            setIsDisabled(false);
            return;
          }

          router.push("/thank-you");
        }}
        className="bg-white shadow-sm px-4 py-2 rounded text-[#4CAF50] hover:bg-[#f0f0f0] font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
      >
        {!isDisabled ? "Submit" : "Please wait..."}
      </button>
    </div>
  );
}
