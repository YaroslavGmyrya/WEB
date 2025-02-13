import styles from './BuyBlock.module.css'
import CustomItem from '../customItem'

const BuyBlcok = () => {
    return(
        <>
        <div className={styles.buyBlock}>
            <img style={{width:'40%', height:'717px'}} src='games.jpg'></img>
            <div className={styles.buyGame}>
                <div className={styles.buyText}>
                Купить игру Cyberpunk 2077
                </div>
                <div className={styles.gameSet}>
                    <div className={styles.setDescription}>В комплект входит</div>

                        <CustomItem imageName='disk.png'>Футляр с игровыми дисками</CustomItem>
                        <CustomItem imageName='handbook.png'>Футляр с кодом для загрузки игры и дисками (pc)</CustomItem>
                        <CustomItem imageName='case.png'>Справочник с информацией об игровом мире</CustomItem>
            
                </div>

                <div className={styles.choicePlatform}>
                    <div className={styles.setDescription}>Выберите платформу:</div>
                    <div className={styles.row}>
                        <img src='PcLogo.svg'></img>
                        <img src='XoneLogo.svg'></img>
                    </div>  
                    <div className={styles.row}>
                        <img src='stadiaLogo.svg'></img>
                        <img src='PlaystationLogo.svg'></img>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default BuyBlcok