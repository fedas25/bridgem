import style from "./style.module.css"
import cn from "classnames";
import { Slider } from "src/uiKit/slider";
import arrow from "src/assets/Icons/arrow-left.svg";
import { useState } from "react";
import { useScreenType } from "src/hooks/common/useScreenType";

export const HowStartLearning = () => {
  const screenType = useScreenType();

  return (
    <div className={cn("container-padding", style.container)}>
      <div className={cn("container-padding", style.container)}>
        <div className={style.container_nav}>
          <div className={style.title}>
            Как начать обучение?
          </div>
          <div className={style.nav}>
            {screenType === "desktop" ? (
              <>
                <img src={arrow} />
                <img src={arrow} style={{ transform: "rotate(180deg)" }} />
              </>
            ) : null}
          </div>
        </div>
        {/* <Slider
          setHandlerLeft={setHandlerLeft}
          setHandlerRight={setHandlerRight}
        /> */}
      </div>
    </div>
  )
}
