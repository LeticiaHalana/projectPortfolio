import styles from "./styleHeader.module.css"
import React, { useState } from "react";

export const Header = () => {
    const [menuVisivel, setMenuVisivel] = useState(false);

    const alternarVisibilidade = () => {
        setMenuVisivel((prev) => !prev);
    };
    return (
        <div className={styles.header}>
            <header className={styles.nav}>
                <h1>Letícia Halana</h1>
                <div className={styles.containerVisibleMenu} >
                    <div className={styles.container} onClick={alternarVisibilidade}></div>
                    <ul className={styles.conatinerMenu}>
                        <li className={menuVisivel ? '' : styles.hidden}>Home</li>
                        <li className={menuVisivel ? '' : styles.hidden}>Pojects</li>
                        <li className={menuVisivel ? '' : styles.hidden}>Contatos</li>
                        <li className={menuVisivel ? '' : styles.hidden}>Midias Digitais</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}