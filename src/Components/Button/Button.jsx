/* eslint-disable react/prop-types */
import styles from './Button.module.css';

export default function Button({ children, style, ...props }) {
    return (
        <a
            className={`${styles.button}`}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
            {...props}
        >
            {children}
        </a>
    );
}
