"use client";
import { useState, Dispatch, SetStateAction } from "react";
import RadioBox from "./Radio";

export default function QBox({
  no,
  question_id,
  question,
  choices,
  setAnswers,
}: {
  no: number;
  question_id: number;
  question: string;
  choices: string[];
  setAnswers: Dispatch<SetStateAction<string[]>>;
}) {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  return (
    <div className="border-t-2 border-t-[#4CAF50] shadow-lg rounded-xl relative overflow-hidden bg-white max-w-[640px]">
      <div className="m-7 mx-10 space-y-5">
        <div className="flex flex-col">
          <p className="max-w-2xl whitespace-pre-line">
            {no}. {question}
          </p>
        </div>
        <div>
          <ul className="list-inside space-y-2">
            {choices.map((choice, index) => (
              <li key={index} className="flex items-center">
                <div className="w-5">
                  <RadioBox
                    isSelected={index === selectedChoice}
                    setIsSelected={() => {
                      setSelectedChoice(index);
                      setAnswers((prev) => {
                        const newAnswers = [...prev];
                        newAnswers[question_id - 1] = choice;
                        return newAnswers;
                      });
                    }}
                  />
                </div>
                <p className="pl-3 text-justify">{choice}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
