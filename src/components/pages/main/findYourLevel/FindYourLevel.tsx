import style from "./style.module.css"
import { Button } from "src/uiKit/Button";
import howStartLearning from "src/assets/Images/howStartLearning.svg"
import cn from "classnames";

export const FindYourLevel = () => {
  return (
    <div className={cn("container-padding", style.container)}>
      <img src={howStartLearning} className={style.img} />
      <div className={style.content}>
        <p className={style.title}>
          Узнайте свой уровень английского
        </p>
        <div className={style.text}>
          Этот краткий и увлекательный тест поможет нам понять
          ваш текущий уровень владения английским, чтобы предложить вам именно
          тот курс, который сооaтветствует вашим потребностям и елям.
        </div>
        <Button fullWidth classes={[style.btn]}>
          Пройти тест
        </Button>
      </div>
    </div>
  )
}
