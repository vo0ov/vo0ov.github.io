/* eslint-disable react/prop-types */
import styles from './Project.module.css';
import Button from '../../../Button/Button';

export default function Project({
    image,
    languages,
    name,
    description,
    buttonText,
    url,
}) {
    return (
        <div className={`${styles.project}`}>
            <img className={`${styles.project_image}`} src={image} alt={name} />

            <hr className={`${styles.project_line}`} />

            <p className={`${styles.sub_title}`}>{languages}</p>

            <hr className={`${styles.project_line}`} />

            <p className={`${styles.title}`}>{name}</p>
            <p className={`${styles.sub_title}`}>{description}</p>

            <Button
                href={url}
                style={{
                    backgroundColor: '#a83e9f',
                    padding: '10px 30px',
                    borderRadius: '10px',
                }}
            >
                {buttonText}
            </Button>
        </div>
    );
}
