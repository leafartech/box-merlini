import styles from './Header.module.css'

export default function Header({ buttonClicked }) {
    return (
        <header className={styles.header}>
            <nav className={styles['nav-top']}>
                <img src="./images/logo5.png" alt="" />
            </nav>
            <div className={styles.firstSect}>
                <div>
                    <p className={styles.unic2}>Essa oferta só irá aparecer para você uma única vez.</p>
                    <iframe className={styles.video_player2} src="https://www.youtube.com/embed/gKQ58H5Llw4?rel=0&modestbranding=1&showinfo=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h1>Assista o vídeo até o final e entenda como viajar para os principais destinos do Brasil com até 60% de economia!</h1>
                    <p className={styles.unic}>Essa oferta só irá aparecer para você uma única vez.</p>
                    {/* <p>Essa oferta só irá aparecer para você uma única vez: Balneário Camboriú, Gramado, Foz do Iguaçu, Florianópolis, Bombinhas, Guarujá, Bonito, Natal e até mesmo Orlando, Nova York, Londres ou Paris com 60% de economia.
                    </p> */}
                </div>
                <iframe className={styles.video_player} src="https://www.youtube.com/embed/gKQ58H5Llw4?rel=0&modestbranding=1&showinfo=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className={ styles.paragraph }>Balneário Camboriú, Gramado, Foz do Iguaçu, Florianópolis, Bombinhas, Guarujá, Bonito, Natal e até mesmo Orlando, Nova York, Londres ou Paris com 60% de economia.</p>
            </div>
            {/* <HeroFlex link={true} head={true} img={ true } main="Viaje para os principais destinos do Brasil com até 60% de economia" subtitle="Balneário Camboriú, Gramado, Foz do Iguaçú, Florianópolis, Bombinhas, Guarujá, Bonito, Natal e até mesmo Orlando, Nova York, Londres ou Paris com 60% de economia e com segurança da reserva até o checkout.">
                <div className={ styles['div-img']}>
                    <img src="./images/mainImg.png" alt="Imagem principal" />
                    <iframe width="360px" src="https://www.youtube.com/embed/gKQ58H5Llw4?rel=0&modestbranding=1&showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </HeroFlex> */}
        </header>
    )
}