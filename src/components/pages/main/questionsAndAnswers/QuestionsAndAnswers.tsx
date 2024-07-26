import style from "./style.module.css"
import cn from "classnames";
import { Slider } from "src/uiKit/slider";
import arrow from "src/assets/Icons/arrow-left.svg";
import { useState } from "react";
import { useScreenType } from "src/hooks/common/useScreenType";

export const QuestionsAndAnswers = () => {
  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.title}>
        Вопросы и ответы
      </div>
    </div>
  )
}
