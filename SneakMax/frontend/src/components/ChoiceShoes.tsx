"use client";
import ChoiceCard from "./SubComponents/ChoiceCard";
import CustomButton from "./SubComponents/customButton";
import CheckBox from "./SubComponents/CheckBox";
import React, { forwardRef, useState } from "react";

interface ChoiceShoesProps {
  ref?: React.Ref<HTMLDivElement>;
}

const ChoiceShoes = forwardRef<HTMLDivElement, ChoiceShoesProps>((props, ref) => {
  const [indexWindow, setIndexWindow] = useState(1);
  const [showScreen, setShowScreen] = useState(false);

  // Определяем классы для анимации
  const getWindowClasses = (windowIndex: number) => {
    if (indexWindow === windowIndex) {
      return "z-[304] opacity-100 translate-x-0";
    }
    if (indexWindow > windowIndex) {
      return "z-[-10] opacity-0 translate-x-[-200px]";
    }
    return "z-[-10] opacity-0 translate-x-[200px]";
  };

  return (
    <div ref={ref} className="relative w-full h-[658px] overflow-hidden">
      {/* Первый экран */}
      <div
        className={`absolute top-0 left-0 w-full h-[658px] flex justify-center items-center transition-all duration-1000 ${getWindowClasses(
          1
        )}`}
      >
        <div className="w-[1180px] h-full flex flex-col bg-custom_beige rounded-[2px] px-[100px] py-[40px] gap-[20px]">
          <div>Мы подберем идеальную пару для вас</div>
          <div className="relative w-full text-[16px] font-normal text-choice_gray">
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
            <div className="absolute top-[30px] w-full h-[2px] bg-custom_beige_border"></div>
          </div>
          <div>Какой тип кроссовок рассматриваете?</div>
          <div className="relative flex flex-wrap justify-between gap-[20px]">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <ChoiceCard key={i} />
              ))}
            <div className="w-full h-[2px] bg-custom_beige_border mt-[30px]"></div>
            <div className="flex w-full justify-between items-center">
              <div className="text-[16px] text-choice_gray font-normal">1 из 3</div>
              <CustomButton
                onClick={() => setIndexWindow(2)}
                width={211}
                height={50}
                textColor="rgba(68, 75, 88, 1)"
                backgroundColor="transparent"
                fontSize={16}
                borderColor="rgba(68, 75, 88, 1)"
                borderStyle="solid"
                borderWidth="2px"
              >
                Следующий шаг
              </CustomButton>
            </div>
          </div>
        </div>
      </div>

      {/* Второй экран */}
      <div
        className={`absolute top-0 left-0 w-full h-[658px] flex justify-center items-center transition-all duration-1000 ${getWindowClasses(
          2
        )}`}
      >
        <div className="w-[1180px] h-full flex flex-col bg-custom_beige rounded-[2px] px-[100px] py-[40px] gap-[20px]">
          <div>Мы подберем идеальную пару для вас</div>
          <div className="relative w-full text-[16px] font-normal text-choice_gray">
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
            <div className="absolute top-[30px] w-full h-[2px] bg-custom_beige_border"></div>
          </div>
          <div>Какой размер вам подойдет?</div>
          <div className="relative flex justify-between gap-[20px]">
            <CheckBox>не менее 36</CheckBox>
            <CheckBox>36-38</CheckBox>
            <CheckBox>39-41</CheckBox>
            <CheckBox>42-44</CheckBox>
            <CheckBox>45 и больше</CheckBox>
          </div>

          <img className="pt-[35px]" src="ChoiceSneaker.svg" alt="Кроссовки" />

          <div className="flex w-full justify-between items-center pt-[30px]">
            <div className="text-[16px] text-choice_gray font-normal">2 из 3</div>
            <CustomButton
              onClick={() => setIndexWindow(3)}
              width={211}
              height={50}
              textColor="rgba(68, 75, 88, 1)"
              backgroundColor="transparent"
              fontSize={16}
              borderColor="rgba(68, 75, 88, 1)"
              borderStyle="solid"
              borderWidth="2px"
            >
              Следующий шаг
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Третий экран */}
      <div
        className={`absolute top-0 left-0 w-full h-[658px] flex justify-center items-center transition-all duration-1000 ${getWindowClasses(
          3
        )}`}
      >
        <div className="w-[1180px] h-full flex flex-col bg-custom_beige rounded-[2px] px-[100px] py-[40px] gap-[20px]">
          <div>Мы подберем идеальную пару для вас</div>
          <div className="relative w-full text-[16px] font-normal text-choice_gray">
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
            <div className="absolute top-[30px] w-full h-[2px] bg-custom_beige_border"></div>
          </div>
          <div>Уточните какие-либо моменты</div>
          <textarea
            className="w-[465px] h-[300px] border-none outline-none"
            placeholder="Введите сообщение"
          ></textarea>
          <div className="flex w-full justify-between items-center mt-[250px]">
            <div className="text-[16px] text-choice_gray font-normal">3 из 3</div>
            <CustomButton
              onClick={() => setIndexWindow(4)}
              width={211}
              height={50}
              textColor="rgba(68, 75, 88, 1)"
              backgroundColor="transparent"
              fontSize={16}
              borderColor="rgba(68, 75, 88, 1)"
              borderStyle="solid"
              borderWidth="2px"
            >
              Следующий шаг
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Финальный экран */}
      <div
        className={`absolute top-0 left-0 w-full h-[658px] flex justify-center items-center transition-all duration-1000 ${getWindowClasses(
          4
        )}`}
      >
        <div className="w-[1180px] h-full flex flex-col bg-custom_beige rounded-[2px] px-[100px] py-[40px] gap-[20px]">
          <div>Ваша подборка готова!</div>
          <div className="relative w-full text-[16px] font-normal text-choice_gray">
            Оставьте свои контактные данные, чтобы мы могли отправить подготовленный для вас каталог
            <div className="absolute top-[30px] w-full h-[2px] bg-custom_beige_border"></div>
          </div>
          <div className="relative w-[655px] h-[399px] flex flex-col gap-[25px] rounded-[4px] bg-custom_beige_border text-white py-[20px] pl-[20px] pr-[150px]">
            <div>Получить предложение</div>
            <div>Получите подборку подходящих для вас моделей на почту</div>
            <div className="flex flex-col gap-[10px]">
              <input
                className="h-[60px] rounded-[3px] px-[20px] bg-input_bg"
                placeholder="Ваше имя"
              />
              <input
                className="h-[60px] rounded-[3px] px-[20px] bg-input_bg"
                placeholder="E-mail"
              />

            <img className="absolute top-[-5px] right-[-100px]" src="Phone.svg" alt="Телефон" />

            <img
                className={`absolute top-[0px] right-[-104px] w-[220px] h-[400px] transition-all duration-[0.8s] ${
                    showScreen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                src="Display.svg"
                alt="Экран телефона"
                />
            </div>
            <CustomButton
              onClick={() => setShowScreen(true)}
              width={221}
              height={60}
              textColor="white"
              backgroundColor="rgba(241, 79, 79, 1)"
              fontSize={16}
            >
              Отправить
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ChoiceShoes;
