import wavyLight from '../../../assets/wavy-light.svg';
import styles from './WavySection.module.css';

export default function WavySection() {
    return (
        <section className={`${styles.wavy_section}`}>
            <img
                className={`${styles.wavy}`}
                src={wavyLight}
                width={1274}
                height={167}
                alt=""
            />
        </section>
    );
}
