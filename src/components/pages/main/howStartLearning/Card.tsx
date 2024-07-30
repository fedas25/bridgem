import style from "./style.module.css"
import arrow from "src/assets/Icons/arrow-left.svg";
import howStartLearning from "src/assets/Images/howStartLearning.png"
import { Button } from 'src/uiKit/Button'

type Props = {
    handlerLeft: () => void,
    handlerRight: () => void
}

export const Card = ({ handlerLeft, handlerRight }: Props) => {
    return (
        <div className={style.card}>
            <div className={style.nav}>
                <div className={style.count}>1 / 4</div>
                <div>
                    <img src={arrow} onClick={handlerRight} />
                    <img src={arrow} onClick={handlerLeft} style={{ transform: "rotate(180deg)" }} />
                </div>
            </div>
            <img className={style.img} src={howStartLearning} />
            <div className={style.content}>
                <p className={style.nameStep}>Пройдите тест на определение уровня</p>
                <div className={style.text}>
                    Мы заботимся о том, чтобы каждый студент обучался на своём уровне,
                    поэтому рекомендуем пройти наш тест на определение уровня. Это поможет нам точно определить ваш
                    стартовый уровень и предложить наиболее подходящую программу обучения.
                </div>
                <Button classes={[style.btn]}>
                    Пройти тест
                </Button>
            </div>
        </div>
    )
}
