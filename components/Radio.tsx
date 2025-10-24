"use client";
import { Dispatch, SetStateAction } from "react";

export default function RadioBox({
  isSelected,
  setIsSelected,
}: {
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className="w-5 h-5 flex justify-center items-center"
        onClick={() => setIsSelected(!isSelected)}
      >
        <div
          className={`rounded-full border-2 ${
            isSelected ? "border-[#4CAF50]" : "border-[#5F6368]"
          } w-5 h-5 cursor-pointer absolute`}
        ></div>
        {/* DOTTED */}
        {isSelected && (
          <div className="rounded-full bg-[#4CAF50] w-2 h-2 cursor-pointer absolute"></div>
        )}
      </div>
    </>
  );
}
