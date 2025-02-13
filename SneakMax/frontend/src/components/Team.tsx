import PersonCard from "./SubComponents/PersonCard"


import React, { forwardRef } from "react";

interface Team{
    ref?: React.Ref<HTMLDivElement>;
}
const Team = forwardRef<HTMLDivElement, Team>((props,ref) => {
    return(
        <>
            <div ref={ref} className="relative z-[-3] flex overflow-hidden justify-center items-center w-full h-[1190px] bg-custom_purple">
                <div className="absolute z-[-1] top-[-153px] right-[-350px] w-[686px] h-[686px] rounded-full bg-custom_coral"></div>
                <div className="absolute z-[-1] top-[-336px] right-[-450px] w-[644px] h-[644px] border-[1px] border-white_0_5 rounded-full"></div>
                <div className="absolute z-[-1] top-[300px] right-[-225px] w-[297px] h-[297px] border-[1px] border-white_0_5 rounded-full"></div>
                <div className="w-[1180px] h-[1000px] flex flex-wrap gap-[20px]">
                    <PersonCard img="Person1.svg"></PersonCard>
                    <PersonCard img="Person2.svg"></PersonCard>
                    <PersonCard img="Person3.svg"></PersonCard>
                    <PersonCard img="Person4.svg"></PersonCard>
                    <PersonCard img="Person5.svg"></PersonCard>
                    <PersonCard img="Person6.svg"></PersonCard>
                </div>
            </div>
        </>
    )
})

export default Team