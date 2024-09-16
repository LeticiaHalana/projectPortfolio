import styles from "./stylesBanner.module.css";

export const BannerSection = () => {

    return (
        <section className={styles.containerSection} >
            <div className={styles.containerBanner}>
                <aside> <img src="src/assets/banner-img.png" alt="banner" /> </aside>
                <div className={styles.container} >
                    <div className={styles.containerImgName}>
                        <div className={styles.bannerImg}></div>
                        <h2>Hello, my name is Letícia Halana;</h2>
                    </div>

                    <div className={styles.texts}>
                        <h1>I <span>love</span> creating and <span>developing</span> projects</h1>
                        <p>Discover here in this environment, created especially for you, all my projects and technologies.</p>

                        <div className={styles.buttonGit}>
                            <button>See Projects</button>
                            <a href="https://github.com/LeticiaHalana" target="_blank" className={styles.git}></a>
                        </div>

                        <div className={styles.ferramentas}>
                            <div className={styles.js}></div>
                            <div className={styles.css}></div>
                            <div className={styles.html}></div>
                            <div className={styles.react}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

