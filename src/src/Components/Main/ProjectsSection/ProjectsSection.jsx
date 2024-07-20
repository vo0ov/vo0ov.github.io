import Project from './Project/Project';
import styles from './ProjectsSection.module.css';

import MySite from '../../../assets/Projects/vo0ovAvatar.webp';
import mClicker from '../../../assets/Projects/moneyClicker.webp';
import screenLight from '../../../assets/Projects/screenLight.webp';
import CarDriving from '../../../assets/Projects/carDriving.webp';
import MagicBall from '../../../assets/Projects/magicBall.webp';
import TheLifeOfSquares from '../../../assets/Projects/theLifeOfSquares.webp';

export default function WavySection() {
    return (
        <section className={`${styles.info_section}`}>
            <h1 className={`${styles.title}`}>Мои проекты</h1>
            <p className={`${styles.sub_title}`}>
                Это лишь некоторая чать моих
                <br />
                публичных и активных на данный момент проектов.
            </p>
            <div className={`${styles.project_list}`}>
                <Project
                    image={TheLifeOfSquares}
                    languages="Java, JavaFX, Intellej IDEA"
                    name="The Life Of Squares"
                    description="Игра про развитие эволюции."
                    buttonText="Github"
                    url="https://github.com/vo0ov/The-life-of-squares"
                />
                <Project
                    image={MagicBall}
                    languages="Unity, C#"
                    name="Magic Ball"
                    description="Магический шар. Задай свой вопрос!"
                    buttonText="Rustore"
                    url="https://www.rustore.ru/catalog/app/com.vo0ov.magicball"
                />
                <Project
                    image={CarDriving}
                    languages="Unity, C#"
                    name="Car Driving"
                    description="Гоночный 2D Симулятор."
                    buttonText="Rustore"
                    url="https://www.rustore.ru/catalog/app/com.vo0ov.CarDriving"
                />
                <Project
                    image={screenLight}
                    languages="Unity, C#"
                    name="Screen Light"
                    description="Цветной фонарик."
                    buttonText="Rustore"
                    url="https://www.rustore.ru/catalog/app/com.vo0ov.screenLight"
                />
                <Project
                    image={mClicker}
                    languages="Unity, C#"
                    name="Money Clicker"
                    description="Моя первая мобильная игра."
                    buttonText="Rustore"
                    url="https://www.rustore.ru/catalog/app/com.vo0ov.mClicker"
                />
                <Project
                    image={MySite}
                    languages="React, HTML, CSS, JS"
                    name="Этот сайт"
                    description="Этот сайт был сделан на React"
                    buttonText="Github"
                    url="https://github.com/vo0ov/vo0ov.github.io"
                />
            </div>
        </section>
    );
}
