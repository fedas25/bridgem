import style from "./style.module.css"
import cn from "classnames";
import { Slider } from "src/uiKit/slider";
import { useScreenType } from "src/hooks/common/useScreenType";
import { Card } from "./Card";

export const HowStartLearning = () => {
  const screenType = useScreenType();
  const { handlerLeft, handlerRight, ...propsSlider } = Slider.useSliderController()

  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.title}>
        Как начать обучение?
      </div>
      <Slider.View {...propsSlider}>
        <Card handlerLeft={handlerLeft} handlerRight={handlerRight} />
        <Card handlerLeft={handlerLeft} handlerRight={handlerRight} />
        <Card handlerLeft={handlerLeft} handlerRight={handlerRight} />
        <Card handlerLeft={handlerLeft} handlerRight={handlerRight} />
        <Card handlerLeft={handlerLeft} handlerRight={handlerRight} />
      </Slider.View>


    </div>
  )
}
