import React, { useState } from "react";
interface IButton {
  width: number;
  height: number;
  textColor: string;
  backgroundColor: string;
  children: React.ReactNode; 
  font: string;
  fontSize: number;
  fontWeight: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  type?: "submit" | "reset" | "button"; 
}

const CustomButton: React.FC<IButton> = ({width,height,textColor,backgroundColor,children,font,fontSize,fontWeight,onClick,type = "button",}) => {
  const [CurrentBackground, SetCurrentBackground] = useState(backgroundColor)

  const MouseMove: () => void = () =>{
    if(backgroundColor === 'black'){
      SetCurrentBackground('rgba(30, 31, 30, 0.95)')
    }
    if(backgroundColor==='rgba(248, 242, 0, 1)'){
      SetCurrentBackground('rgba(237, 231, 45,0.95)')
    }
  }

  const MouseLeave: () => void = () =>{
    SetCurrentBackground(backgroundColor)
  }

  return (
    <button
      onMouseMove={MouseMove}
      onMouseLeave={MouseLeave}
      type={type} 
      onClick={onClick} 
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: CurrentBackground,
        color: textColor,
        fontFamily: font,
        fontSize: `${fontSize}px`,
        border: "none",
        fontWeight: fontWeight,
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
