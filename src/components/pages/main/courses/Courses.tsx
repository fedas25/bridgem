import style from "./style.module.css";
import { Slider } from "src/uiKit/slider";
import cn from "classnames";
import arrow from "src/assets/Icons/arrow-left.svg";
import { CardCourse } from "src/uiKit/cardCourse";
import { useScreenType } from "src/hooks/common/useScreenType";

export const Courses = () => {
  const screenType = useScreenType();
  const { handlerLeft, handlerRight, ...propsSlider } = Slider.useSliderController()

  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.container_nav}>
        <div className={style.title}>
          Погрузитесь в потрясающий мир спокойного обучения
        </div>
        <div className={style.nav}>
          {screenType === "desktop" ? (
            <>
              <img src={arrow} onClick={handlerRight} />
              <img src={arrow} onClick={handlerLeft} style={{ transform: "rotate(180deg)" }} />
            </>
          ) : null}
        </div>
      </div>
      <Slider.View {...propsSlider}>
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </Slider.View>
    </div>
  );
};