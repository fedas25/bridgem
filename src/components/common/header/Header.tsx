import React from "react";
import classNames from "classnames";
import style from "./style.module.css"
import logo from "src/assets/Icons/logo.svg"
import account from "src/assets/Icons/account.svg"
import burgerMenu from "src/assets/Icons/burger-menu.svg"
import arrowDown from "src/assets/Icons/arrow-down.svg"

type Props = {
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>,
  isShowMenu: boolean
}

export const Header = ({ isShowMenu, setIsShowMenu }: Props) => {
  const showMenu = () => setIsShowMenu(true);
  const changeMenu = () => setIsShowMenu(!isShowMenu);

  return (
    <div className={style.container}>
      <img src={logo} className={style.logo} />

      <div className={classNames("font-h5", style.about)}>
        О нас
      </div>
      <div onClick={changeMenu} className={classNames("font-h5", style.courses)}>
        Курсы
        <img src={arrowDown} className={classNames({ [style.arrowRotate]: isShowMenu })} />
      </div>
      <div className={classNames("font-h5", style.contacts)}>
        Контакты
      </div>
      <div className={classNames("font-h5", style.account)}>
        <img src={account} className={style.account} />
        Вход / Регистрация
      </div>

      <img src={account} className={style.account_mobile} />
      <img src={burgerMenu} onClick={showMenu} className={style.burger} />
    </div>
  )
}
