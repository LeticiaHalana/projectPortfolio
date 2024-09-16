import styles from "./stylesProjectsSection.module.css";

export const TechList = ({ list }) => {

    return (
        list.map((project, index) => (
            <div key={index} className={styles.containerList}>
                <h1>{project.name}</h1>
                <p>Linguagem:    <span>Javascript</span></p>
                <p>{project.description}</p>

                <div className={styles.links}>
                    <div className={styles.containerGit}>
                        <div className={styles.imgGit}></div>
                        <a href="https://github.com/LeticiaHalana" target="_blank" rel="noopener noreferrer">Github Code</a>
                    </div>
                    <div className={styles.containerAplication}>
                        <div className={styles.imgArron}></div>
                        <a href="#" >Aplicação</a>
                    </div>
                </div>

            </div>)))

}


