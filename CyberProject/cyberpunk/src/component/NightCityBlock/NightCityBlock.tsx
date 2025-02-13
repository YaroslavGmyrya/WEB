import React from "react";
import styles from './NightCityBlock.module.css'
import CustomText from "../customColorText";
const NightCityBlock:React.FC = ()=>{
    const BlueText = CustomText('rgb(60, 159, 221)')
    return(
        <>
        <div className={styles.nightCity}>
            <div className={styles.nightCityText}>
                Найт-Сити изменит тебя навсегда!
            </div> 
            <div className={styles.descriptionCyberpunk}>
            <BlueText>Cyberpunk 2077</BlueText> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, 
            где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, 
            позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя 
            открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
            </div>
            <div className={styles.images}>
                <div className={styles.imageCol1}>
                    <img src="desc-img2.png"></img>
                    <img style={{marginTop:'15px'}} src="desc-img3.png"></img>
                </div>

                <div className={styles.imageCol2}>
                <img style = {{ transform: 'scale(0.95)'}} src="desc-img1.png"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default NightCityBlock