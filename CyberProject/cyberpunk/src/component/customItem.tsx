import React, { ReactNode } from "react";

interface Iitem{
    imageName: string;
    children?: ReactNode;
}

const CustomItem: React.FC<Iitem> = ({imageName,children}) => {
    return(
        <>
            <div style={{display:'flex', gap:'15px',alignItems:'center'}}>
                <img src= {imageName}></img>
                <div>{children}</div>
            </div>
        </>
    )
}

export default CustomItem;