import React, { ReactNode } from "react";

interface IText {
  color: string;
  children?: ReactNode;
}

const CustomTextTemplate: React.FC<IText> = ({ color, children }) => {
  return <span style={{ color }}>{children}</span>;
};

const CustomText = (color: string) => {
  return ({ children }: { children: React.ReactNode }) => (
    <CustomTextTemplate color={color}>{children}</CustomTextTemplate>
  );
};

export default CustomText;
