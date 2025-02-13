"use client";

import React, { useState, forwardRef } from "react";
import { Sneaker } from "@/app/page";

interface IInfo {
  sneaker: Sneaker;
  onClickDetailed: (value: boolean, data: any) => void;
  onClickToBasket: () => void;
}

const ProductCard = forwardRef<HTMLDivElement, IInfo>(
  ({ sneaker, onClickDetailed, onClickToBasket }, ref) => {
    const [Enter, setEnter] = useState(false);

    const handleMouseEnter = () => setEnter(true);
    const handleMouseLeave = () => setEnter(false);

    return (
      <div
        ref={ref}
        className="w-[280px] h-[348px] flex flex-col hover:border-solid hover:border-[0.5px] hover:border-contact_bg hover:shadow-lg"
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <div
            className={`relative transition-opacity duration-3000 ${
              Enter ? "opacity-65" : "opacity-100"
            }`}
          >
            <img
              className="w-full h-[289px]"
              src={`http://127.0.0.1:8000/${sneaker.main_photo}`}
              alt="product"
            />
          </div>
          <div
            className={`absolute flex justify-center gap-[20px] top-[110px] left-[53px] transition-opacity duration-450 ${
              Enter ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              onClick={onClickToBasket}
              className="hover:cursor-pointer hover:opacity-95"
              src="BuyProd.svg"
              alt="buy"
            />
            <img
              onClick={() => onClickDetailed(true, sneaker)}
              className="hover:cursor-pointer hover:opacity-95"
              src="CheckProd.svg"
              alt="check"
            />
          </div>
        </div>

        <div className="text-[16px] text-cutom_gray_text font-normal">
          <div className="h-[30px] overflow-hidden">{sneaker.name}</div>
          <div className="text-[20px]">{sneaker.price}</div>
        </div>
      </div>
    );
  }
);

export default ProductCard;
