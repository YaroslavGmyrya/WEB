import React, { useState, useRef } from "react";

// Используем forwardRef для работы с ref
interface IButton {
  width: number;
  height: number;
  textColor: string;
  backgroundColor: string;
  children: React.ReactNode;
  font?: string;
  fontSize: number;
  fontWeight?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button";
  ref?: React.Ref<HTMLDivElement>; 
  className?:string
}

const CustomButton = React.forwardRef<HTMLDivElement, IButton>(({
  width,
  height,
  textColor,
  backgroundColor,
  children,
  font,
  fontSize,
  fontWeight,
  onClick,
  type = "button",
  borderColor,
  borderWidth = "1px",
  borderStyle = "solid",
  className
}, ref) => {
  const [CurrentBackground, SetCurrentBackground] = useState(backgroundColor);

  const [Enter, setEnter] = useState(false);

  const handleEnter = () => { setEnter(true); };
  const handleLeave = () => { setEnter(false); };

  const MouseMove = (): void => {
    if (backgroundColor === "black") {
      SetCurrentBackground("rgba(30, 31, 30, 0.95)");
    }
    if (backgroundColor === "rgba(248, 242, 0, 1)") {
      SetCurrentBackground("rgba(237, 231, 45,0.95)");
    }
  };

  const handleScroll = () => {
    if (ref && 'current' in ref) {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MouseLeave = (): void => {
    SetCurrentBackground(backgroundColor);
  };

  return (
    <div className={`${className}`} onClick={handleScroll}>

      <button
        // Теперь можно использовать ref с компонентом button
        onMouseEnter={handleEnter}
        onMouseOut={handleLeave}
        className={`hover:cursor-pointer transition-all duration-4000 ${Enter ? 'shadow-lg scale-[1.01]' : ''}`} // Исправлено: duration
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
          fontWeight: fontWeight,
          borderWidth: borderColor ? borderWidth : "0",
          borderStyle: borderColor ? borderStyle : "none",
          borderColor: borderColor || "transparent",
          borderRadius: "3px",
        }}
      >
        {children}
      </button>
    </div>
  );
});

export default CustomButton;
