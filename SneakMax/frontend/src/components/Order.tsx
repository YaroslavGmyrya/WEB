import BasketItem from "./SubComponents/BasketItem"
import CustomButton from "./SubComponents/customButton"
import { Sneaker } from "@/app/page"


interface IProps{
    showOrder : boolean
    sneakers: Sneaker[]
    onTrashClick: (sneaker:Sneaker) => void
    onClickBuy: () => void
}
const Order: React.FC<IProps> = ({showOrder, sneakers, onTrashClick,onClickBuy}) => {
    return(
         <div className={`fixed z-[390] overflow-scroll no-scrollbar top-[50px] left-[500px] w-[580px] h-[700px] flex flex-col gap-[30px] bg-white rounded-[4px] p-[20px] transition-all duration-700 ${
    showOrder
      ? 'opacity-100 pointer-events-auto scale-100'
      : 'opacity-0 pointer-events-none scale-90'}`}>
            <div className="flex justify-between">
                <div>Оформление заказа</div>
                <div>Заказ 3456 67</div>
            </div>
            <div className="flex flex-col gap-[15px] w-full h-[360px] border-solid border-[1px] border-gray_border">
                <div>Товаров в заказе: {sneakers.length}шт</div>
                <div>Общая сумма заказа: {sneakers.reduce((total, item) => total + item.price, 0)}₽</div>
                <div>Состав заказа:</div>
                <div className="felx flex-col gap-[15px] overflow-scroll no-scrollbar">
                    {sneakers.map((item, index) => (
                        <BasketItem key={index} sneaker={item} onTrashClick={() => onTrashClick(item)}></BasketItem>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-[10px]">
                <input className='h-[60px] rounded-[3px] px-[20px] bg-input_bg' placeholder="Ваше имя"></input>
                <input className='h-[60px] rounded-[3px] px-[20px] bg-input_bg' placeholder="Номер телефона"></input>
                <input className='h-[60px] rounded-[3px] px-[20px] bg-input_bg' placeholder="E-mail"></input>
            </div>

            <CustomButton
                onClick={onClickBuy}
                width={221}
                height={60}
                textColor="white"
                backgroundColor="rgba(241, 79, 79, 1)"
                fontSize={16}
                >Отправить
            </CustomButton>
        </div>
    )
}

export default Order