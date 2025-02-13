"use client";
import CustomButton from "./SubComponents/customButton";
import DetailedSize from "./SubComponents/DetailedSize";
import { useState, useEffect } from "react";
import { Sneaker } from "@/app/page";

interface IProps {
  ShowProd: boolean;
  sneaker: Sneaker;
}

const DetailedProdCard: React.FC<IProps> = ({ ShowProd, sneaker }) => {
  const [activeSize, setActiveSize] = useState(-1);
  // Синхронизация появления модального окна

  const handleClick = (value: number) => {
    setActiveSize(value);
    console.log("Selected size:", value);
  };

  // Если данных нет, возвращаем пустой блок
  if (!sneaker) return null;

  // Рендерим через React Portal
  return(
    <>
      <div
        className={`fixed left-[250px] top-[50px] z-[50] h-[700px] bg-white overflow-scroll no-scrollbar p-[40px] transition-all duration-[1.3s] ${
          ShowProd
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-90"
        }`}
      >
        <div className="flex flex-col gap-[40px]">
          <div className="flex gap-[20px]">
            <div className="flex flex-col gap-[20px] w-[520px]">
              <img
                className="w-[520px] h-[462px] rounded-[4px] hover:cursor-pointer"
                src={`http://127.0.0.1:8000/${sneaker.main_photo}`}
                alt="Main product"
              />
              <div className="flex justify-between w-full">
                {Array(6)
                  .fill("Sneaker2.svg")
                  .map((src, index) => (
                    <img
                      key={index}
                      className="w-[70px] h-[76px] rounded-[4px] hover:cursor-pointer"
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-[30px] w-[430px] justify-between">
              <div className="flex gap-[40px]">
                <div className="flex gap-[15px]">
                  <div>Артикул</div>
                  <div>{sneaker.article}</div>
                </div>
                <div className="flex gap-[15px]">
                  <div>В наличии:</div>
                  <div>{sneaker.in_stock}</div>
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="text-[24px]">{sneaker.name}</div>
                <div className="flex gap-[10px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="RaitingStar.svg"
                    alt="Rating"
                  />
                </div>
                <div>Выберите размер</div>
                <div className="flex flex-wrap gap-[10px]">
                  {sneaker.size.map((item) => (
                    <DetailedSize
                      key={item}
                      activeSize={item === activeSize}
                      onClick={() => handleClick(item)}
                    >
                      {item}
                    </DetailedSize>
                  ))}
                </div>
              </div>
              <div className="text-[30px] font-bold">{sneaker.price}</div>
              <div className="flex flex-col gap-[12px]">
                <div className="mt-[7px]">
                  <CustomButton
                    width={430}
                    height={60}
                    textColor="white"
                    backgroundColor="rgba(241, 79, 79, 1)"
                    fontSize={16}
                  >
                    Заказать
                  </CustomButton>
                </div>
                <div className="flex flex-col gap-[5px]">
                  {[
                    "Бесплатная доставка до двери",
                    "Оплата заказа при получении",
                    "Обмен в течении двух недель",
                  ].map((text, index) => (
                    <div key={index} className="flex gap-[10px] items-center">
                      <img
                        className="w-[15px] h-[12px]"
                        src="CheckMark.svg"
                        alt="Check"
                      />
                      <div>{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <div>Описание</div>
              <div className="w-[430px] h-[120px] overflow-scroll no-scrollbar">
                {sneaker.description}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div>Характеристики</div>
              <div>Пол: {sneaker.sex}</div>
              <div>Цвета: {sneaker.color.join(", ")}</div>
              <div>Состав: {sneaker.compound}</div>
              <div>Страна: {sneaker.country}</div>
            </div>
          </div>
          <div className="w-full h-[456px] bg-custom_gray_text"></div>
        </div>
      </div>
    </>
  );
};

export default DetailedProdCard;
