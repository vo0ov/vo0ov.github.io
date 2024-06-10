/* eslint-disable react/no-unknown-property */
import Button from '../../Button/Button';
import styles from './InfoSection.module.css';

export default function InfoSection() {
    return (
        <section className={`${styles.info_section}`}>
            <h1 className={`${styles.title}`}>Связь со мной</h1>
            <p className={`${styles.sub_title}`}>
                Вы можете связаться со мной по этим ссылкам
            </p>
            <Button
                href={'https://t.me/vo0ov_programmer'}
                style={{
                    backgroundColor: '#a83e9f',
                    marginTop: '20px',
                    padding: '18px 51px',
                    borderRadius: '16px',
                }}
            >
                Telegram
            </Button>
            <Button
                href={'https://discordapp.com/users/803934236499378208/'}
                style={{
                    backgroundColor: '#a83e9f',
                    marginTop: '20px',
                    padding: '18px 51px',
                    borderRadius: '16px',
                }}
            >
                Discord
            </Button>
            <Button
                href={'mailto:admin@vo0ov.ru'}
                style={{
                    backgroundColor: '#343537',
                    marginTop: '20px',
                    padding: '18px 51px',
                    borderRadius: '16px',
                }}
            >
                admin@vo0ov.ru
            </Button>
        </section>
    );
}
