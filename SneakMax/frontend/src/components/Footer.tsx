import Link from "next/link"
const Footer = () => {
    return(
        <div className="flex justify-between items-center w-full h-[80px] px-[185px] text-white bg-custom_gray_text">
            <Link href='#'>SneakMax</Link>
            <div className="flex w-[680px] h-[14px] items-center justify-between text-white text-[14px] font-normal hover:cursor-pointer">
                <Link href='#'>Каталог</Link>
                <Link href='#'>О нас</Link>
                <Link href='#'>Подбор товара</Link>
                <Link href='#'>Наша команда</Link>
                <Link href='#'>Доставка и оплата</Link>
                <Link href='#'>Контакты</Link>
            </div>
        </div>
    )
}

export default Footer