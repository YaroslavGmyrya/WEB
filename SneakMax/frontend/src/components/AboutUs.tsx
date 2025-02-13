import React, { forwardRef } from "react";

interface IAboutUs{
    ref?: React.Ref<HTMLDivElement>;
}
const AboutUs = forwardRef<HTMLDivElement, IAboutUs>((props,ref) => {
    return(
        <>
            <div ref={ref} className="relative flex w-full h-[580px] bg-custom_purple">
                <div className="absolute top-[-220px] left-[-336px] w-[644px] h-[644px] opacity-50 border-white border-[1px] rounded-full"></div>
                <div className="absolute top-[-182px] left-[253px] w-[297px] h-[297px] opacity-50 border-white border-[1px] rounded-full"></div>
                <div className="absolute top-[58px] left-[504px] w-[15px] h-[15px] bg-custom_coral rounded-full"></div>

                
                <div className="flex flex-col gap-[20px] w-[435px] h-[210px] ml-[374px] mt-[200px] text-white">
                    <div className="text-[30px] font-bold w-[250px]">Пара слов о нас</div>
                    <div className="text-[16px] font-normal w-[380px]">Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. 
                        В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </div>
                    <div className="flex justify-end text-[20px] font-bold items-center gap-[20px]">
                        <div className="w-[30px] h-[3px] bg-white rounded-[2px]"></div>
                        <div>SneakMax</div>
                    </div>
                </div>

                <div>
                    <img className="w-[949px] h-[580px] [clip-path:polygon(34%_0,_85%_0,_72%_100%,_19%_99%)]" src='Sport.svg'></img>
                </div>
              
            </div>
        </>
    )
})
export default AboutUs