import React, { forwardRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Itext {
  LightText: string;
  Header: string;
  Description: string;
  Number: string;
  Inversion?: boolean;
  image: string;
  id?: string;
  onInViewChange: (id: string) => void;
}

const Card = forwardRef<HTMLDivElement, Itext>(
  ({ LightText, Header, Description, Number, Inversion, image, id, onInViewChange }, ref) => {
    const { ref: inViewRef} = useInView({
      threshold: 0.5,
      onChange: () => {
        if (id) {onInViewChange(id)}
      },
    });

    const combinedRef = (node: HTMLDivElement | null) => {
      if (typeof ref === "function") ref(node);
      else if (ref && "current" in ref) ref.current = node;
      inViewRef(node); 
    };

    return (
      <div
        id={id}
        ref={combinedRef}
        className={`relative flex ${Inversion ? "flex-row-reverse" : ""} justify-between items-center w-[1462px] h-[720px] mt-[100px]`}
      >
        <div
          className={`absolute z-[10] top-[38px] ${Inversion ? "right-[550px]" : ""} text-[240px] text-white font-bold leading-[240px] opacity-[5%] w-[240px] h-[240px]`}
        >
          {Number}
        </div>
        <div className="relative flex flex-col z-[20] w-[632px] h-[439px] ml-[150px] gap-[30px]">
          <div className="flex items-center gap-[35px] w-[360px] h-[22px]">
            <div className="bg-CustomLightText w-[72px] h-[2px]"></div>
            <div className="text-[18px] font-extrabold text-CustomLightText">{LightText}</div>
          </div>

          <div className="text-[61px] text-white leading-[76px] font-semibold w-[555px] h-[170px]">
            {Header}
          </div>

          <div className="text-[18px] text-white font-bold w-[632px] h-[160px]">{Description}</div>

          <div className="flex gap-[15px]">
            <Link href="/SomePage" className="text-CustomLightText font-bold hover:cursor-pointer">
              read more
            </Link>
            <img className="w-[16px] h-[24px]" src="/PointerRight.svg" alt="Pointer" />
          </div>
        </div>

        <img className="w-[566px] h-[720px]" src={`${image}`} alt="Card Image" />
      </div>
    );
  }
);

export default Card;
