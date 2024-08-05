import style from "./style.module.css"
import letters from "src/assets/Images/letters.svg"
import books from "src/assets/Images/books.svg"
import cn from "classnames"

export const Cover = () => {
  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.content}>
        <img src={letters} className={style.letters} />
        <div>
          <p className={style.title}>
            A1 (Beginner Level)
          </p>
          <div className={style.text}>
            Онлайн-курс предназначен для абсолютных начинающих.
            Мир английского языка через базовые фразы, простые диалоги и повседневную лексику.
          </div>
        </div>
      </div>
      <img src={books} className={style.books} />
    </div>
  )
}
