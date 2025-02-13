import React, { forwardRef } from "react";

interface IParam {
  children: string;
  ref?: React.Ref<HTMLDivElement|null>;
}



const MenuItem = forwardRef<HTMLDivElement, IParam>(({children }, ref) => {
    const handleScroll = () => {
        if (ref && 'current' in ref) {
          ref?.current?.scrollIntoView({ behavior: "smooth", block:"center"});
        }
      };
  return (
    <div  onClick={handleScroll} className="relative group hover:cursor-pointer">
      <div className="absolute left-0 top-[18px] w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></div>
      <div>{children}</div>
    </div>
  );
});

export default MenuItem;
