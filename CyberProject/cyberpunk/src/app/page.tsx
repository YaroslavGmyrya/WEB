"use client";
import HeroBlock from '../component/HeroBlock/HeroBlock'
import NightCityBlock from '../component/NightCityBlock/NightCityBlock'
import PromoBlock from "../component/PromoBlock/PromoBlock";
import HpBlock from '../component/HpBlock/HpBlock'
import BuyBlock from '../component/BuyBlock/BuyBlock'
import Footer from "@/component/Footer/Footer";
export default function index(){

    return(
        <>
        <HeroBlock></HeroBlock>

        <NightCityBlock></NightCityBlock>

        <img style={{margin:'0', padding:'0', display:'block'}} src = 'WBtransition.png'></img>

        <PromoBlock></PromoBlock>

        <img src = "BYtransition.png" style={{display:'block'}}></img>

        <HpBlock></HpBlock>

        <BuyBlock></BuyBlock>

       <Footer></Footer>

        </>
    )
}