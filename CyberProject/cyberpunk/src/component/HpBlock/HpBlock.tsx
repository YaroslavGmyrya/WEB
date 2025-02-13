import Link from 'next/link'
import styles from './HpBlock.module.css'
import CustomItem from '../customItem'
import CustomButton from '../customButton'
const HpBlock = () => {
    return(
        <>
            <div className={styles.Hp}>
            <div className={styles.HpCol1}>
                <div className={styles.HpRow1}>
                    <img src='monitor.png'></img>
                </div>

                <div className={styles.HpRow2}>
                    <img src='HpLogo.svg'></img>
                    <img src='cross.svg'></img>
                    <img src='CyberpunkLogo.svg'></img>
                </div>
            </div>

            <div className={styles.HpCol2}>
                <div className={styles.Header}>
                Полное погружение вместе с HP
                </div>

                <div className={styles.HpDescription}>
                Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, 
                созданном для отображения максимально насыщенных цветов. 
                Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!
                </div>
                <div className={styles.list}>

                    <CustomItem imageName='color.png'>Яркие насыщенные цвета</CustomItem>

                    <CustomItem imageName='star.png'>Кристальная четкость изображения</CustomItem>

                    <CustomItem imageName='frame.png'>Быстрые движения и плавный геймплей</CustomItem>

                    <Link href='AboutHp'>
                        <CustomButton
                            width={194} 
                            height={59} 
                            textColor= 'rgba(248, 242, 0, 1)'
                            backgroundColor="black"
                            font="Roboto"
                            fontSize={18}
                            fontWeight="700">
                            Подробнее 
                        </CustomButton> 
                    </Link>
                    
                   
                </div>
            </div>
        </div>

        </>
    )
}

export default HpBlock