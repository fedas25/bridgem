import style from "./style.module.css"
import arrowLink from "src/assets/Icons/arrow-link.svg"
import jackdaw from "src/assets/Icons/jackdaw.svg"
import watch from "src/assets/Icons/watch.svg"

// TODO перенести это в часть компонента курса

// TODO вынести тайтл в общий компонент

export const CardCourse = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <span>A1 (Beginner Level)</span>
                <div className={style.linkContainer}>
                    <img src={arrowLink} />
                    <span>
                        Подробнее
                    </span>
                </div>
            </div>
            <div className={style.description}>
                Онлайн-курс предназначены для абсолютных начинающих.
                Мир английского языка через базовые фразы, простые диалоги и повседневную лексику.
                Онлайн-курс предназначены для абсолютных начинающих
            </div>
            <div className={style.points}>
                <div className={style.point}>
                    <img src={jackdaw} />
                    <span>9 месяцев</span>
                </div>
                <div className={style.point}>
                    <img src={jackdaw} />
                    <span>72 часа</span>
                </div>
                <div className={style.point}>
                    <img src={jackdaw} />
                    <span>3 пробных занятия</span>
                </div>
                <div className={style.point}>
                    <img src={jackdaw} />
                    <span>скидка при оплате за полный курс</span>
                </div>
            </div>
            <div className={style.prices}>
                <div className={style.price_per_class}>
                    <div className={style.title_price_classes}>
                        1 занятие
                    </div>
                    <div className={style.price}>
                        <span>1000 ₽</span>
                        <div className={style.time}>
                            <img src={watch} />
                            <div>
                                1 час
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.separator}></div>
                <div className={style.price_per_course}>
                    <div className={style.title_price_course}>
                        Полный курс
                    </div>
                    <div className={style.discount}>
                        <span style={{ textDecoration: "line-through" }}>
                            72 000 ₽
                        </span>
                        <div className={style.banner}>
                            -40%
                        </div>
                    </div>
                    <div className={style.price}>
                        <span>1000 ₽</span>
                        <div className={style.time}>
                            <img src={watch} />
                            <div>
                                1 час
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
