export default function Page() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="border-t-2 border-t-[#4CAF50] shadow-lg rounded-xl relative overflow-hidden bg-white max-w-[640px]">
        <div className="w-full h-3 bg-[#4CAF50] absolute"></div>
        <div className="m-7 mx-10 space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold ">Thank you!</h1>
            <p className="max-w-2xl text-justify">
              Your responses have been recorded successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
