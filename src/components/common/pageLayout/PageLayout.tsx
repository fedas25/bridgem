import { ReactElement } from "react";
import style from "./style.module.css"
import { Header } from "../header";
import { Footer } from "../Footer";

type Props = {
  children: ReactElement;
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={style.container_content}>
        {children}
      </div>
      <Footer />
    </>
  )
}
