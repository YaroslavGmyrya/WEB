interface IPersonCard{
    img:string;
}

const PersonCard:React.FC<IPersonCard> = ({img}) => {
    return(
        <div className="w-[380px] h-[480px] flex flex-col gap-[20px]">
            <img className="w-full h-[400px] rounded-[3px]" src={img}></img>
            <div className="text-white flex flex-col gap-[10px]">
                <div className="text-[24px] font-bold">Максим Золотарев</div>
                <div className="text-[16px] font-normal">Администратор</div>
            </div>
        </div>
    )
}

export default PersonCard