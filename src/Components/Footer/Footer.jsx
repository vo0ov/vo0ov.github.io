import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

export default function Main() {
    return (
        <footer className={`${styles.footer}`}>
            <Logo />
            <p className={`${styles.sub_title}`}>
                Все права защищены ツ.
                <br />© vo0ov - {new Date().getFullYear()}
            </p>
        </footer>
    );
}
