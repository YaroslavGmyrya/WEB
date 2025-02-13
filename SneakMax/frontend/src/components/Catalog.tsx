"use client";

import { forwardRef, useEffect, useState } from "react";
import CheckBox from "./SubComponents/CheckBox";
import ProductCard from "./SubComponents/ProductCard";
import CustomButton from "./SubComponents/customButton";
import { Sneaker } from "../app/page";

interface ICatalog {
  sneakers: Sneaker[];
  onClickDetailed: (value: boolean, data: Sneaker) => void;
  onCountBasketItem: (sneaker:Sneaker) => void;
  ShowMore: () => void;
  onCheckBoxClick: (flag:boolean, trueValue:string) => void
  onGetSizes: (sizes:number[]) => void
  loadWithFilter: () => void
}

const Catalog = forwardRef<HTMLDivElement, ICatalog>(({sneakers,onClickDetailed,onCountBasketItem,ShowMore,onCheckBoxClick,onGetSizes,loadWithFilter}, ref) => {
  const [ChoiceSize, SetChoiceSize] = useState<number[]>([]);

  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  const handleClick = (index: number) => {
    let newChoiceSize;
    if (ChoiceSize.includes(index)) {
      newChoiceSize = ChoiceSize.filter((i) => i !== index); // Удаляем элемент
    } else {
      newChoiceSize = [...ChoiceSize, index]; // Добавляем элемент
    }
    SetChoiceSize(newChoiceSize); // Обновляем состояние
    onGetSizes(newChoiceSize); // Передаём новое состояние
  };

  return (
    <div ref={ref} className="flex w-full justify-center mt-[50px]">
      <div className="flex flex-col w-[1180px]">
        {/* Заголовок */}
        <div className="text-[30px] font-bold gap-[80px]">Каталог</div>

        <div className="flex gap-[20px]">
          {/* Левая панель с фильтрами */}
          <div className="flex flex-col items-center w-[280px] h-[640px] p-[10px] bg-custom_beige text-custom_gray_text gap-[25px] rounded-[4px]">
            <div className="w-[240px] h-[48px] text-[24px] font-normal">
              Подбор <br /> по параметрам
            </div>

            {/* Пол */}
            <div className="w-[240px] h-[50px] flex flex-col gap-[6px]">
              <div className="text-[16px]">пол</div>
              <div className="flex justify-between">
                <CheckBox onClick={onCheckBoxClick} trueValue="Мужской">Мужской</CheckBox>
                <CheckBox onClick={onCheckBoxClick} trueValue="Женский">Женский</CheckBox>
              </div>
            </div>

            {/* Размеры */}
            <div className="w-[240px] h-[197px] flex flex-col">
              <div className="text-[16px] font-normal">Размер</div>
              <div className="flex flex-wrap overflow-scroll no-scrollbar">
                {sizes.map((item, index) => (
                  <div
                    key={item}
                    onClick={() => handleClick(item)}
                    className={`flex w-[80px] h-[57px] border-solid border-[0.5px] border-cutom_beige_border justify-center items-center 
                    hover:cursor-pointer hover:bg-white_0_5 ${
                      ChoiceSize.includes(item) ? "bg-white" : ""
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Кнопка применить */}
            <div className="hover:cursor-pointer">
              <CustomButton
                onClick={loadWithFilter}
                width={239}
                height={60}
                textColor="white"
                backgroundColor="rgba(68, 75, 88, 1)"
                fontSize={16}
              >
                Применить
              </CustomButton>
            </div>

            {/* Кнопка сбросить */}
            <div className="flex items-center justify-center w-[72px] h-[16px] text-custom_gray_text text-[16px] font-normal hover:cursor-pointer hover:opacity-90">
              сбросить
            </div>
          </div>

          {/* Список продуктов */}
          <div className="flex flex-col w-full gap-[30px]">
            <div className="flex flex-wrap w-full min-h-[750px] gap-[20px]">
              {sneakers && sneakers.length > 0 ? (
                sneakers.map((item, index) => (
                  <div key={index}>
                    <ProductCard
                      onClickDetailed={onClickDetailed}
                      onClickToBasket={()=>onCountBasketItem(item)}
                      sneaker={item}
                    />
                  </div>
                ))
              ) : (
                <div>Нет данных</div>
              )}
            </div>

            {/* Кнопка загрузить ещё */}
            <div className="flex justify-center">
              <CustomButton
                onClick={ShowMore}
                width={200}
                height={60}
                textColor="white"
                backgroundColor="rgba(241, 79, 79, 1)"
                fontSize={16}
              >
                Показать еще
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Catalog;
