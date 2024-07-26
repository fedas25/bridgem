import style from "./style.module.css"
import { Button } from "src/uiKit/Button";
import branch from "src/assets/Images/branch.svg"
import cn from "classnames";

export const Cover = () => {
  return (
    <div className={cn("container-padding", style.container)}>

      <img src={branch} className={style.branch} />

      <p className={style.title}>
        Высокий уровень английского без стресса и неудобств
      </p>
      <p className={style.text}>
        Присоединяйтесь к нашим онлайн-курсам и дайте нам
        возможность помочь вам достичь языковых целей.
        С нами английский станет вашим надёжным и верным другом в любой ситуации.
      </p>
      <Button classes={[style.btn]}>
        Записаться на бесплатный урок
      </Button>
    </div>
  )
}
