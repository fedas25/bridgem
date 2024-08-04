import style from "./style.module.css"
import cn from "classnames";

import cross from "src/assets/Icons/cross-menu.svg"
import account from "src/assets/Icons/account.svg"
import arrow from "src/assets/Icons/arrow-down.svg"
import whatsApp from "src/assets/Icons/WhatsApp.svg"
import vk from "src/assets/Icons/vk.svg"
import telegram from "src/assets/Icons/telegram.svg"
import React, { useState } from "react";

type PropsMobile = {
  show: boolean
  handlerClose: () => void
}

const MenuMobile = ({ show, handlerClose }: PropsMobile) => {
  const [isShowListCourses, setIsShowListCourses] = useState(false);
  const handlerCourse = () => setIsShowListCourses(!isShowListCourses)

  return (
    <div className={cn(style.container, { [style.showContainer]: show })}>
      <div className={style.content}>
        <img src={cross} onClick={handlerClose} className={style.close} />
        <div className={style.logIn}>
          <img src={account} />
          <span>
            Вход / регистрация
          </span>
        </div>
        <p>
          О нас
        </p>
        <div>
          <div className={style.courses} onClick={handlerCourse}>
            <span>
              Курсы
            </span>
            <img src={arrow} className={cn({ [style.arrowRotate]: isShowListCourses })} />
          </div>
          <div className={cn(style.listCourses, { [style.hidden]: isShowListCourses })}>
            <p>A1 (Beginner Level)</p>
            <p>A2 (Elementary Level)</p>
            <p>B1 (Intermediate Level)</p>
            <p>B2 (Upper-Intermediate Level)</p>
            <p>ЕГЭ</p>
            <p>ОГЭ</p>
          </div>
        </div>
      </div>

      <div className={style.requisites}>
        <div className={style.innOrgn}>
          <p>ИНН: 7724462764</p>
          <p>ОГРГН: 400402671190</p>
        </div>
        <div className={style.numberEmail}>
          <span>+7 499 727-38-38</span>
          <span>info@fitsharing.ru</span>
        </div>
        <div className={style.socialNetwork}>
          <img src={whatsApp} />
          <img src={vk} />
          <img src={telegram} />
        </div>
      </div>
    </div>
  )
}

const MenuDesktop = ({ show = true }: { show: boolean }) => {
  return (
    <div className={cn(style.containerDesktop, { [style.showContainerDesktop]: show })}>
      <p>A1 (Beginner Level)</p>
      <p>A2 (Elementary Level)</p>
      <p>B1 (Intermediate Level)</p>
      <p>B2 (Upper-Intermediate Level)</p>
      <p>ЕГЭ</p>
      <p>ОГЭ</p>
    </div>
  )
}

type Props = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu = ({ show = false, setShow }: Props) => {
  const handlerClose = () => setShow(false)

  return (
    <>
      <MenuMobile show={show} handlerClose={handlerClose} />
      <MenuDesktop show={show} />
    </>
  )
}
