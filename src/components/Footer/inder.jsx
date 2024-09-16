import styles from "./styleFooter.module.css";

export const Footer =()=>{
    return(
        <footer className={styles.containerFooter}>
            <div className={styles.container}>
                <div className={styles.imgFooter}></div>
                <div className={styles.card}>
                    <h1>Thank you!</h1>
                    <p>Follow me on my social networks and let's talk</p>
                </div>
            </div>
            <div className={styles.SocialMidias}>
                <div className={styles.instagram}></div>
                <div className={styles.linkedin}></div>
            </div>
        </footer>
    )
}