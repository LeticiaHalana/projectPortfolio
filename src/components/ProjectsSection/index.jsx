import styles from "./stylesProjectsSection.module.css";
import { TechList } from "./TechList";
import { projects } from "../../data/projects";

export const ProjectsSection = () => {
    const project = projects;

    return (
        <section className={styles.containerSection}>
            <div className={styles.container}>
                <div className={styles.pricipalTitle}>
                    <h1>My projects</h1>
                    <p>Projects created at <span>Leticia Halana .</span></p>
                </div>
                <div className={styles.containerProjects}>
                    <TechList list={project} />
                </div>
            </div>
        </section>
    )
};