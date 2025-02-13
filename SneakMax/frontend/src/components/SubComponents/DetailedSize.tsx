

interface IProps{
    children?:number
    activeSize:boolean
    onClick: () => void
}

const DetailedSize:React.FC<IProps> = ({children,onClick,activeSize}) => {
    
    return(
        <div onClick={onClick} className={`${activeSize ? 'bg-gray-100' : 'bg-white'} flex justify-center items-center w-[70px] h-[32px] rounded-[4px] border border-solid border-border_gray hover:cursor-pointer hover:bg-gray-100 hover:border-black`}>{children}</div>
    )
}

export default DetailedSize


