"use client";
import Link from 'next/link';
import React, {useState, useEffect} from "react";
import styles from "./HeroBlock.module.css";
import CustomButton from "../customButton";


const HeroBlock:React.FC = ()=>{
   
    const [CurrentHero, SetCurrentHero] = useState('MainHero.jpg')

    useEffect(() => {
        const ListOfHero = ['MainHero.jpg', 'Hero1.jpg', 'Hero2.jpg']
    
        const changeBackground = () => {
          const randomHero = ListOfHero[Math.floor(Math.random() * ListOfHero.length)];
          SetCurrentHero(randomHero);
        };
    
        const interval = setInterval(changeBackground, 14000); 
    
        return () => clearInterval(interval); 
      }, []);
      
    return(

    <div className={styles.heroImage} style={{backgroundImage:`url(\' ${CurrentHero} \')`}}>
        <div className={styles.topBar}>
            <div className={styles.CyberpunkLogo}>
                <Link href='/'>
                    <img src="CyberpunkLogo.svg" alt="CyberpunkLogo"/>
                </Link>
            </div>
            <div className={styles.socialMediaLogo}>
                <Link href='/'> <img src = 'facebookLogo.png'/> </Link>
                <Link href='/'> <img src = 'instagramLogo.svg'/> </Link>
                <Link href='/'> <img src = 'twitchLogo.svg'/> </Link>
                <Link href='/'> <img src = 'twitterLogo.svg'/> </Link>
                <Link href='/'> <img src = 'vkLogo.svg'/> </Link>
                <Link href='/'> <img src = 'youtubeLogo.svg'/> </Link>
            </div>
        </div>

        <div className={styles.Platforms}>
            <div className={styles.PlatformsText}>
                Доступно на всех платформах
            </div>
            <Link href='AboutPlatforms'> 
                <CustomButton 
                    width={272} 
                    height={78} 
                    textColor="rgba(248, 242, 0, 1)" 
                    backgroundColor="black" 
                    font="Roboto"
                    fontSize={24}
                    fontWeight="700">
                    Подробнее
                </CustomButton>
            </Link>
            
        </div>
    </div>
    )
}

export default HeroBlock;