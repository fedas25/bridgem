import classNames from "classnames";
import style from "./style.module.css"
import logo from "src/assets/Icons/logo.svg"
import account from "src/assets/Icons/account.svg"
import burgerMenu from "src/assets/Icons/burger-menu.svg"
import arrowDown from "src/assets/Icons/arrow-down.svg"

export const Header = () => {
  return (
    <div className={style.container}>
      <img src={logo} className={style.logo} />

      <div className={classNames("font-h5", style.about)}>
        О нас
      </div>
      <div className={classNames("font-h5", style.courses)}>
        Курсы
        <img src={arrowDown} />
      </div>
      <div className={classNames("font-h5", style.contacts)}>
        Контакты
      </div>
      <div className={classNames("font-h5", style.account)}>
        <img src={account} className={style.account} />
        Вход / Регистрация
      </div>

      <img src={account} className={style.account_mobile} />
      <img src={burgerMenu} className={style.burger} />
    </div>
  )
}
