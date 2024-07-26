import style from "./style.module.css";
import { Slider } from "src/uiKit/slider";
import cn from "classnames";
import arrow from "src/assets/Icons/arrow-left.svg";
import { useState } from "react";
import { useScreenType } from "src/hooks/common/useScreenType";

export const Courses = () => {
  const [handlerLeft, setHandlerLeft] = useState<() => void>(() => () => { });
  const [handlerRight, setHandlerRight] = useState<() => void>(() => () => { });
  const screenType = useScreenType();

  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.container_nav}>
        <div className={style.title}>
          Погрузитесь в потрясающий мир спокойного обучения
        </div>
        <div className={style.nav}>
          {screenType === "desktop" ? (
            <>
              <img src={arrow} onClick={handlerLeft} />
              <img src={arrow} onClick={handlerRight} style={{ transform: "rotate(180deg)" }} />
            </>
          ) : null}
        </div>
      </div>
      <Slider
        setHandlerLeft={setHandlerLeft}
        setHandlerRight={setHandlerRight}
      />
    </div>
  );
};
