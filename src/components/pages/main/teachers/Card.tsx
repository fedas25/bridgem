import style from "./style.module.css"
import teacher from "src/assets/Images/teacher.png"
import jackdaw from "src/assets/Icons/jackdaw.svg";
import pleer from "src/assets/Icons/pleer.svg";
import audio from "src/assets/Icons/audio.svg"
import arrow from "src/assets/Icons/arrow-left.svg"

type Props = {
    handlerLeft: () => void,
    handlerRight: () => void
}

export const Card = ({ handlerLeft, handlerRight }: Props) => {
    return (
        <div className={style.card}>
            <img className={style.img} src={teacher} />
            <div className={style.nav}>
                <div className={style.count}>1 / 4</div>
                <div>
                    <img src={arrow} onClick={handlerRight} />
                    <img src={arrow} onClick={handlerLeft} style={{ transform: "rotate(180deg)" }} />
                </div>
            </div>
            <div className={style.content}>
                <div className={style.name}>
                    <span>
                        Касимова Анастасия Викторовна
                    </span>
                    <div>
                        <img src={pleer} />
                        <img src={audio} />
                    </div>
                </div>
                <div className={style.courses}>
                    <div className={style.course}>огэ</div>
                    <div className={style.course}>А1</div>
                    <div className={style.course}>А2</div>
                </div>
                <div className={style.text}>
                    Hello! I’m Anastasia, nice to meet you!
                    Ещё в школе я влюбилась в английский язык, и с тех пор он стал неотъемлемой частью моей жизни.
                    Теперь я не только наслаждаюсь играми, видео и музыкой в оригинале, завожу знакомства с людьми из разных стран,
                    но и обучаю этому интернациональному языку и других.
                </div>
                <div className={style.qualificationsTitle}>
                    Квалификации
                </div>
                <div className={style.qualifications}>
                    <div className={style.qualification}>
                        <img src={jackdaw} />
                        <span>
                            ESOL (C1)
                        </span>
                    </div>
                    <div className={style.qualification}>
                        <img src={jackdaw} />
                        <span>
                            ESOL (C1)
                        </span>
                    </div>
                    <div className={style.qualification}>
                        <img src={jackdaw} />
                        <span>
                            ESOL (C1)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
