import style from "./style.module.css"
import { ReactElement, useState } from "react";
import { Header } from "../header";
import { Footer } from "../Footer";
import { Menu } from "../menu";

type Props = {
  children: ReactElement;
}

export const PageLayout = ({ children }: Props) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
      <Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <Menu show={isShowMenu} setShow={setIsShowMenu} />
      <div className={style.container_content}>
        {children}
      </div>
      <Footer />
    </>
  )
}
