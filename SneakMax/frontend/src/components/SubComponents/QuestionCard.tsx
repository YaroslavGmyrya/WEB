"use client";

import { useState,useRef } from "react";

interface IQuestionCard{
    question:string,
    answer:string,
}
const QuestionCard:React.FC<IQuestionCard> = ({question,answer}) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setActive((prev) => !prev); 
  };

  return (
    <div className="w-[880px] flex flex-col">
      <div className="w-full flex justify-between items-center">
        <div className="text-[20px] font-normal text-custom_question_text">{question}</div>
        <img
          className={`w-[25px] h-[25px] transform transition-transform duration-700 hover:cursor-pointer ${
            active ? "rotate-[225deg]" : "rotate-0"
          }`}
          src="+.svg"
          alt="Toggle Icon"
          onClick={handleClick}
        />
      </div>
      <div
        className="overflow-hidden transition-[height] duration-700 ease-in-out"
        style={{
          height: active ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        ref={contentRef}
      >
        <div className="pt-[10px] text-[16px] font-normal text-custom_answer_text">{answer}</div>
      </div>
      <div className="w-full h-[1px] mt-[25px] bg-custom_question_text"></div>
    </div>
  );
}; 

export default QuestionCard;
