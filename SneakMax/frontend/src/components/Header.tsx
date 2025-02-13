import MenuItem from "./SubComponents/MenuItem";
import CustomButton from "./SubComponents/customButton";
import React, { forwardRef, RefObject } from "react";
import Basket from "./Basket";
import { Sneaker } from "@/app/page";
interface IHeaderProps {
  CatalogRef: RefObject<HTMLDivElement | null>;
  AboutUsRef: RefObject<HTMLDivElement | null>;
  ChoiceShoesRef: RefObject<HTMLDivElement | null>;
  TeamRef: RefObject<HTMLDivElement | null>;
  ContacInfoRef: RefObject<HTMLDivElement | null>;
  onShowBasket: (value: boolean) => void
  onShowOrder: (value: boolean) => void
  countBasketItem: number
  ShowBasket:boolean
  sneakerOnBaset:Sneaker[]
  onTrashClick: (sneaker:Sneaker) => void
  userName:string
  onSetShowAuth: () => void
}

const Header = forwardRef<HTMLDivElement, IHeaderProps>(({
  CatalogRef,
  AboutUsRef,
  ChoiceShoesRef,
  TeamRef,
  ContacInfoRef,
  onShowBasket,
  onShowOrder,
  ShowBasket,
  countBasketItem,
  sneakerOnBaset,
  onTrashClick,
  userName,
  onSetShowAuth
}, ref) => {
  
    const handleScroll = () => {
        if (ref && 'current' in ref) {
            ref?.current?.scrollIntoView({ behavior: "smooth", block:"center"});
        }
      };

      const handleMouseEnter = () => {if (!ShowBasket) {
        onShowBasket(true); // Открыть корзину
      }
    };
      const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
         if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          onShowBasket(false);
        }
        
      };
  return (
    <div ref={ref} className="text-white">
      <div className="relative w-full h-[528px] bg-custom_purple px-[185px] overflow-hidden">
        <div className="fixed left-0 z-[400] flex justify-between w-full h-[50px] bg-custom_purple px-[185px]">
          <div onClick={handleScroll} className="w-[145px] h-[24px] text-[30px] font-bold hover:cursor-pointer">
            SneakMax
          </div>
          <div className="flex justify-between items-center text-[14px] font-normal leading-[14px] gap-[45px]">
            <div className="flex gap-[45px]">
              <MenuItem ref = {CatalogRef}>Каталог</MenuItem>
              <MenuItem ref = {AboutUsRef} >О нас</MenuItem>
              <MenuItem ref = {ChoiceShoesRef}>Подбор товара</MenuItem>
              <MenuItem ref = {TeamRef}>Наша команда</MenuItem>
              <MenuItem ref = {CatalogRef}>Доставка и оплата</MenuItem>
              <MenuItem ref = {ContacInfoRef}>Контакты</MenuItem>
            </div>

            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative z-[200] h-[25px] flex gap-[15px] items-center">
              <img
              
                className="w-[20px] h-[20px] mb-[3px] hover:cursor-pointer"
                src="Basket.svg"
                alt="Basket"
              />
              <div className="absolute top-[10px] right-[-6px]">
                <img src='Ellipse.svg'></img>
                <div className={`absolute top-[2px] text-custom_beige text-[12px] ${countBasketItem >= 10 ? 'right-[2.5px]' : 'right-[4.5px]'}`}>{countBasketItem}</div>
              </div>
             
              <Basket onTrashClick={onTrashClick} sneakerOnBasket={sneakerOnBaset} onShowOrder = {onShowOrder} onShowBasket={onShowBasket} ShowBasket = {ShowBasket} className="top-[-175px] right-[200px]"></Basket> 
            </div>
            
            <div className="flex gap-[5px] items-center">
              <div>{userName}</div>
              <img onClick={onSetShowAuth} className="static z-[500] w-[20px] h-[20px] hover:cursor-pointer hover:shadow-lg hover:scale-105" src='UserIcon.svg'></img>
            </div>
          </div>
        </div>
        <div className="absolute top-[225px] left-[365px] text-[200px] text-custom_bg_text w-[980px] h-[200px]">
          SneakMax
        </div>
        <div className="relative z-[2] flex flex-col gap-[40px] w-[580px] h-[300px] mt-[150px] text-white">
          <div className="w-[580px] h-[100px] font-bold text-[36px]">
            Кроссовки известных брендов с доставкой по России и СНГ
          </div>
          <div className="w-[500px] h-[44px] text-[16px] font-bold">
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </div>
          <CustomButton
            ref={CatalogRef} 
            width={250}
            height={60}
            textColor="custom_bg_text"
            backgroundColor="rgba(241, 79, 79, 1)"
            fontSize={18}
          >
            Перейти к покупкам
          </CustomButton>
        </div>
      </div>
    </div>
  );
});

export default Header;
