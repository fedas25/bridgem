import style from "./style.module.css"
import cn from "classnames";
import { Slider } from "src/uiKit/slider";
import { Card } from "./Card";

export const Teachers = () => {
  const { handlerLeft, handlerRight, ...propsSlider } = Slider.useSliderController()

  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.title}>
        Наши преподаватели сделают обучение английским интересным и захватывающим
      </div>
      <Slider.View {...propsSlider}>
        <Card handlerLeft={handlerLeft} handlerRight={handlerRight} />
        <Card handlerLeft={handlerLeft} handlerRight={handlerRight} />
      </Slider.View>
    </div>
  )
}
