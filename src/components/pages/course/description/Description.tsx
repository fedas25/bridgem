import style from "./style.module.css"
import watch from "src/assets/Icons/watch.svg"
import jackdaw from "src/assets/Icons/jackdaw.svg"
import star from "src/assets/Images/star.svg"
import cn from "classnames"
import { Button } from "src/uiKit/Button"

// TODO вынести карточку в отдельный компонет

export const Description = () => {
  return (
    <div className={cn("container-padding", style.container)}>
      <p className={style.title}>
        Английский станет надежным и верным другом в любой ситуации
      </p>
      <div className={style.card}>
        <div className={style.titleCard}>
          <p>
            Идеальное начало языкового путешествия
          </p>
          <img src={star} />
        </div>

        <div className={style.property}>
          <img src={jackdaw} />
          <p>9 месяцев</p>
        </div>
        <div className={style.property}>
          <img src={jackdaw} />
          <p>72 часа</p>
        </div>
        <div className={style.property}>
          <img src={jackdaw} />
          <p>3 пробных занятия</p>
        </div>
        <div className={style.property}>
          <img src={jackdaw} />
          <p>скидка при оплате за полный курс</p>
        </div>

        <div className={style.prices}>
          <div className={style.priceContainerHour}>
            <p className={style.titlePrice}>
              1 занятие
            </p>
            <div className={style.price}>
              <span>
                1000 ₽
              </span>
              <div className={style.duration}>
                <img src={watch} />
                <span>
                  1 час
                </span>
              </div>
            </div>
          </div>

          <div className={style.separator}></div>

          <div>
            <p className={style.titlePrice} style={{ marginBottom: "32px" }}>
              Полный курс
            </p>
            <div className={style.discount}>
              <span>72 000₽</span>
              <div>-40%</div>
            </div>
            <div className={style.price}>
              <span>
                43 200 ₽
              </span>
              <div className={style.duration}>
                <img src={watch} />
                <span>
                  72 часа
                </span>
              </div>
            </div>
          </div>
        </div>

        <Button classes={[style.btn]} fullWidth>
          Записаться на пробное занятие
        </Button>
      </div>
    </div>
  )
}
