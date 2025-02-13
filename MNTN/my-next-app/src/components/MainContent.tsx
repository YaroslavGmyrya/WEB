import React from "react";

type MainContentProps = React.PropsWithChildren<{}>;

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return (
        <>
            <div className="absolute z-[-5] bg-blackBlue top-[1820x] w-full h-[3100px]"></div>
            <div className="flex flex-col gap-[200px] justify-center p-[20px]">
                <div className="w-[1462px] h-[2650px]"> 
                    {children}
                </div>
            </div>
        </>
    );
};

export default MainContent;
