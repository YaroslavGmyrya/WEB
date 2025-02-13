"use client"
import { useState } from "react"

interface IFlag{
    children?:string
    trueValue:string
    onClick: (flag:boolean, trueValue:string) => void
}

const CheckBox:React.FC<IFlag> = ({children,trueValue,onClick}) =>{
    const [flag,setflag] = useState(false)

    const handleClick = () => {
        debugger
        onClick(flag,trueValue)
        setflag(!flag)
        
    }

    return(
        <div className="h-[24px] flex gap-[5px]">
            <div className="relative w-[24px] h-[24px] border border-solid border-custom_beige_border rounded-[2px] cursor-pointer" onClick={handleClick}>
                <div className={`absolute select-none w-[15px] h-[12px] top-[5px] left-[3px] transition-all duration-[3000] ease-in ${
                    flag ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>

                    <img className="w-[15px] h-[12px]" src="Check.svg" alt="Check icon"/>

                </div>
                  
                
        </div>

            <div className="select-none h-[16px] text-[14px] font-normal">{children}</div>
            
        </div>
    )
}

export default CheckBox