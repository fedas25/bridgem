import { useEffect, useState } from "react";
import style from "./style.module.css"
import cn from "classnames";
import whatsApp from "src/assets/Icons/WhatsApp.svg"
import vk from "src/assets/Icons/vk.svg"
import telegram from "src/assets/Icons/telegram.svg"
import words from "src/assets/Images/wordsFooter.svg"
import wordsDesktop from "src/assets/Images/wordsFooterDesktop.svg"
import { useScreenType } from "src/hooks/common/useScreenType";

export const Footer = () => {
  const screenType = useScreenType() as string

  return (
    <div className={style.footer}>
      <div className={style.words}>
        {screenType !== "mobile" ? <img src={wordsDesktop} /> : <img src={words} />}
      </div>
      <div className={style.socialNetwork}>
        <img src={whatsApp} />
        <img src={vk} />
        <img src={telegram} />
      </div>
      <div className={cn(screenType !== "desktop" ? "font-text-card" : "font-h4", style.inn)}>
        <p>ИНН: 7724462764</p>
        <p>ОГРГН: 400402671190</p>
      </div>
      <div className={cn(screenType !== "desktop" ? "font-text-card" : "font-h4", style.contact)}>
        <p>+7 499 727-38-38</p>
        <p>info@fitsharing.ru</p>
      </div>
    </div >
  )
}
