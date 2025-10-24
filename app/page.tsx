import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh flex justify-center items-center flex-col">
      <div className="border-t-2 border-t-[#4CAF50] shadow-lg rounded-xl relative overflow-hidden bg-white max-w-[640px]">
        <div className="w-full h-3 bg-[#4CAF50] absolute"></div>
        <div className="m-7 mx-10 space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold underline">Comprehension Test</h1>
            <p className="max-w-2xl text-justify">
              This will be the last phase of our study. We will measure
              participants&apos; comprehension of the material presented.
            </p>
          </div>
          <div>
            <p className="font-bold">INSTRUCTIONS</p>
            <ul className="list-disc list-inside">
              <li>
                You will be given <strong>20 minutes</strong> to answer the
                questions.
              </li>
              <li>
                You are allowed to take a look back at the material presented
                while answering the question.
              </li>
              <li>
                Note that we will record the number of lookbacks made. To
                efficiently track, you are{" "}
                <strong>NOT allowed to make a side-by-side</strong> view between
                this site and the material.
              </li>
              <li>Note that you will be video recorded during the test.</li>
              <li>
                Press <strong>next</strong> to immediately proceed to the
                questions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link
        href="/test"
        className="bg-white shadow-sm px-4 py-2 rounded text-[#4CAF50] mt-10 hover:bg-[#f0f0f0] font-semibold"
      >
        Next
      </Link>
    </div>
  );
}
