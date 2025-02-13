"use client";
import BasketItem from "./SubComponents/BasketItem";
import CustomButton from "./SubComponents/customButton";
import { Sneaker } from "@/app/page";

interface IProps {
  className?: string;
  ShowBasket: boolean;
  onShowBasket: (value: boolean) => void;
  onShowOrder: (value: boolean) => void;
  sneakerOnBasket: Sneaker[];
  onTrashClick: (sneaker: Sneaker) => void;
}

const Basket: React.FC<IProps> = ({
  className,
  ShowBasket,
  onShowBasket,
  onShowOrder,
  sneakerOnBasket,
  onTrashClick,
}) => {
  const onClick = () => {
    onShowOrder(true);
    onShowBasket(false);
  };

  return (
    <>
      <div
        className={`absolute z-[50] w-[480px] ${className} transition-all duration-700 ${
          ShowBasket ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-0"
        }`}
      >
        <div
          className={`text-black absolute flex justify-between gap-[40px] w-[480px] h-[91px] bg-white shadow-lg bottom-0 z-[100] left-[200px] top-[432px] p-[20px] rounded-[5px]`}
        >
          <div className="flex flex-col gap-[15px]">
            <div>Итого:</div>
            <div>{sneakerOnBasket.reduce((total, item) => total + item.price, 0)}₽</div>
          </div>
          <CustomButton
            onClick={onClick}
            width={239}
            height={50}
            textColor="white"
            backgroundColor="rgba(241, 79, 79, 1)"
            fontSize={16}
          >
            Перейти в корзину
          </CustomButton>
        </div>
        <div
          className={`absolute z-[60] top-[200px] left-[200px] bg-white flex flex-col gap-[35px] w-[480px] h-[232px] p-[20px] bg-white overflow-scroll no-scrollbar`}
        >
          {sneakerOnBasket.length > 0 ? (
            sneakerOnBasket.map((item, index) => (
              <BasketItem key={index} onTrashClick={() => onTrashClick(item)} sneaker={item} />
            ))
          ) : (
            <div className="flex items-center h-full w-full bg-white justify-center w-full h-full text-gray-500">
              Корзина пуста
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Basket;
