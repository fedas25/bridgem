import { Cover, Description, Stages, Teachers } from "src/components/pages/course"
import style from "./style.module.css"

export const Course = () => {
    return (
        <div className={style.container}>
            <Cover />
            <Description />
            <Stages />
            <Teachers />
        </div>
    )
}
