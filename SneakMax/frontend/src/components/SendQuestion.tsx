import CustomButton from "./SubComponents/customButton"
const SendQuestion = () => {
    return(
        <div className="flex justify-center w-full h-[413px]">
            <div className="flex w-[1120px] justify-between h-[413px]">
                <div className="flex flex-col items-center gap-[40px] rounded-[3px] bg-custom_purple w-[380px] h-[402px] p-[20px]">
                    <div className="flex flex-col items-center gap-[20px]">
                        <div className="text-white text-[30px] font-bold">Есть вопросы?</div>
                        <div className="w-[260px] text-center text-white text-[16px] font-normal">Заполните форму и наш менеджер свяжется с вами</div>
                    </div>
                    <form className="flex flex-col gap-[10px] justify-center">
                        <input className='h-[60px] rounded-[3px] px-[20px]' placeholder="Ваше имя"></input>
                        <input className='h-[60px] rounded-[3px] px-[20px]' placeholder="Номер телефона"></input>
                        <CustomButton
                            width={338}
                            height={60}
                            textColor="white"
                            backgroundColor="rgba(241, 79, 79, 1)"
                            fontSize={16}
                            >Отправить
                        </CustomButton>
                    </form>
                </div>

                <div className="flex flex-col w-[680px] h-[402px] gap-[20px]">
                    <div className="flex justify-center w-full h-[56px]">
                        <img className="w-[157px]" src='InstLogoText.svg'></img>
                    </div>

                    <div className="flex gap-[15px] w-full h-[337px]">
                        <div className="flex flex-col gap-[15px]">
                            <img className='w-[150px] h-[155px]' src='Picture1.svg'></img>
                            <img className='w-[150px] h-[155px]' src='Picture2.svg'></img>
                        </div>

                        <img className='w-[323px] h-[325px]' src='Picture3.svg'></img>

                        <div className="flex flex-col gap-[15px]">
                            <img className='w-[150px] h-[155px]' src='Picture4.svg'></img>
                            <img className='w-[150px] h-[155px]' src='Picture5.svg'></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SendQuestion