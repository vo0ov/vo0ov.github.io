import styles from './Main.module.css';
import WavySection from './WavySection/WavySection';
import InfoSection from './InfoSection/InfoSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';

export default function Main() {
    return (
        <main className={`${styles.main_container}`}>
            <WavySection />
            <ProjectsSection />
            <InfoSection />
        </main>
    );
}
