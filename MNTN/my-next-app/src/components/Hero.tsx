"use client";
import { useState,useEffect,useRef,forwardRef} from "react";
import Link from "next/link";
import { useInView } from 'react-intersection-observer'

interface Ifunc{
  onClick: (event: React.MouseEvent<HTMLUListElement>) => void
  SetActiveIndex: (num:number) => void
  activeIndex:number
  onInViewChange: ( id:string) => void;
  id?: string;
}

const Hero = forwardRef<HTMLDivElement, Ifunc>(
  ({ onClick, SetActiveIndex,activeIndex,onInViewChange,id }, ref) => {

    const { ref: inViewRef, inView } = useInView({
      threshold: 0.5, 
      onChange: () => {
        if (id) {
          onInViewChange(id);
        }
      },
      trackVisibility: true,
      delay:101,
    });

    const combinedRef = (node: HTMLDivElement | null) => {
      if (typeof ref === "function") ref(node);
      else if (ref && "current" in ref) ref.current = node;
      inViewRef(node); 
    };

  return (
    <div ref={combinedRef}   
    className="w-full h-[1200px]">
      {/* Background layers */}
      <div className="absolute z-[-4] top-[-100px] bg-[url('/Sky.svg')] bg-cover bg-no-repeat bg-center w-full h-[1513px]"></div>
      <div className="z-[-3] absolute inset-0 bg-gradient-to-tl from-CustomGreyOp0 to-CustomGreyOp1"></div>
      <div  className="absolute z-[-3] top-[464px] bg-[url('/Mountains.png')] bg-cover bg-no-repeat w-full h-[1422px]"></div>
      <div className="absolute z-[-2] top-[768px] bg-[url('/Hero.svg')] bg-cover bg-center bg-position-top bg-no-repeat w-full h-[926px]">
        <div className="z-[-1] absolute top-[475px] inset-0">
          <img src="/Grad2.svg" alt="Gradient" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mt-[64px] px-[20px] w-full h-[25px] font-bold text-white">
        <div className="bg-[url('/LogoMNTN.svg')] w-[108px] h-[25px] bg-no-repeat"></div>
        <div className="flex gap-[40px] justify-between text-[18px]">
          <Link href='/SomePage'>Equipment</Link>
          <Link href='/SomePage'>About us</Link>
          <Link href='/SomePage'>Blog</Link>
        </div>
          <Link href='/SomePage' className="flex gap-[15px]">
          <img src="/UserIcon.svg" alt="User Icon" />
          <div>Account</div>
        </Link>
      </div>

      {/* Main Content */}
      < div id={id} 
    className="mt-[187px] flex justify-center items-center">
        {/* Left Section */}
        <div className="mr-auto rotate-90 flex justify-center items-center w-[173px] h-[24px] gap-[20px]">
          <div className="font-bold text-[18px] text-white w-[83px] h-[22px]">
            Follow us
          </div>

          <Link href='/SomePage'>
            <img
              className="rotate-[270deg] mx-auto w-[24px] h-[24px]"
              src="/InstLogo.svg"
              alt="Instagram Logo"
            />
          </Link>

          <Link href='/SomePage'>
              <img
                className="rotate-[270deg] mx-auto w-[24px] h-[24px]"
                src="/TwitLogo.svg"
                alt="Twitter Logo"
              />
          </Link>
         
        </div>

        {/* Center Section */}
        <div className="mr-auto flex flex-col w-[950px] h-[310px] justify-center items-left gap-[10px]">
          <div className="flex items-center gap-[35px]">
            <div className="bg-CustomLightText w-[72px] h-[2px]"></div>
            <div className="text-[18px] font-extrabold text-CustomLightText">
              A Hiking guide
            </div>
          </div>
          <div className="text-[80px] text-white font-semibold">
            Be prepared for the Mountains and beyond!
          </div>
          <a className="flex gap-[15px] hover:cursor-pointer" data-scroll href={'#01'} onClick={()=>SetActiveIndex(1)}>
            <div className="text-white font-bold">scroll down</div>
            <img className="w-[16px] h-[24px]" src="PointerDown.svg" alt="Pointer" />
          </a>
        </div>

        {/* Right Section (Navigation) */}
        <div className="text-white w-[77px] h-[240px] mr-[100px]">
          <ul
            onClick={onClick}
            className="list-none fixed top-[300px] z-[50] right-[85px] w-[77px] h-[240px] space-y-1"
          >
            {["Start", "1", "2", "3"].map((item, index) => (
              <li
                key={index}
                id={index.toString()}
                className={`flex items-center justify-center border-r-[3px] ${
                  activeIndex === index ? "border-white" : "border-black"
                } w-[76px] h-[61px]`}
              >
                <a data-scroll href={`#0${item}`}>
                  {item === "Start" ? "Start" : `0${index}`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Hero;
