import styles from './Footer.module.css'
import Link from 'next/link'
const Footer = () => {
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.imageBlock}>
                <Link href='/'> <img src='CyberpunkLogo.svg'></img> </Link>
                <Link href='/'> <img src='CDProjektLogo.svg'></img> </Link>
            </div>
            <div className={styles.footerText}>
                <Link href='License'> <div>Лицензия</div> </Link>
                <Link href = 'PrivacyPolicy'> <div>Политика конфиденциальности</div> </Link>
            </div>
        </div>

        <div className={styles.postFooter}>
            <div style={{width:'253px', height:'14px'}}> CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</div>
        </div>
        </>
    )   
}

export default Footer