import { Courses, Cover } from "src/components/pages/main"
import style from "./style.module.css"

export const Main = () => {
    return (
        <div className={style.container}>
            <Cover />
            <Courses />
        </div>
    )
}