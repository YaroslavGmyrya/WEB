import CheckBox from "./CheckBox"
const ChoiceCard = () => {
    return(
        
        <div className="w-[280px] h-[154px] flex flex-col gap-[20px]">
            <img className="w-full h-[120px] rounded-[2px]" src='ShoesForChoice.svg'></img>
            <CheckBox>кеды</CheckBox>
        </div>
       
    )
}

export default ChoiceCard