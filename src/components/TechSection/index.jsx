import styles from "./styleTechSection.module.css";

export const TechSection = () => {
    return (
        <section className={styles.containerSection}>
            <div className={styles.container}>
                <div className={styles.containerTitle}>
                    <h1>Let's set up a conversation and <span>develop our creativity</span> together?</h1>
                    <p>Advertise your brand organically within Dribbble's design inspiration feed.</p>
                </div>
                <div className={styles.containerInfos}>
                    <div className={styles.card}>
                        <div className={styles.imgIconWpp}></div>
                        <div className={styles.cardInfos}>
                            <h2>My phone</h2>
                            <p>I'm available for a voice chat, let's about creativity together?</p>
                            <a href="https://wa.me/5561998051374" target="_blanck">Call Now</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgIconEmail}></div>
                        <div className={styles.cardInfos}>
                            <h2>My email</h2>
                            <p>Send me an email reporting feedbacks, suggestions and ideas</p>
                            <a href="mailto:lettyshalanatr@gmail.com" target="_blanck">Send email now</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgIconLinkedin}></div>
                        <div className={styles.cardInfos}>
                            <h2>My LinkedIn</h2>
                            <p>Send me an email reporting feedbacks, suggestions and ideas</p>
                            <a href="https://www.linkedin.com/in/leticia-halana-ribeiro-de-sousa-4350632aa/" target="_blanck">Send email now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}