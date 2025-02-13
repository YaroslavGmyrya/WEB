import { Sneaker } from "@/app/page"

interface IProps{
    sneaker:Sneaker
    onTrashClick?: () => void
}



const BasketItem:React.FC<IProps> = ({sneaker,onTrashClick}) => {
    if (!sneaker) {
        return <></>
    }
    return(
        <div className="w-full h-[100px] flex justify-between gap-[10px] items-center text-black bg-white">
        <div className="flex gap-[20px]">
                <img className="w-[100px] h-[57px]" src={`http://127.0.0.1:8000/${sneaker.main_photo}`}></img>

                <div className="flex flex-col gap-[20px] justify-start">
                    <div>{sneaker.name}</div>
                    <div>{sneaker.price}</div>
                </div>
        </div>

            <img onClick={onTrashClick} className="w-[20px] h-[20px] hover:cursor-pointer hover:shadow-lg" src='Trash.svg'></img>

        </div>
    )
}

export default BasketItem