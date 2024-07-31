import { Teachers, Courses, Cover, FindYourLevel, HowStartLearning, QuestionsAndAnswers } from "src/components/pages/main"
import style from "./style.module.css"

export const Main = () => {
    return (
        <div className={style.container}>
            {/* <Cover /> */}
            {/* <Courses /> */}

            <HowStartLearning />
            <Teachers />

            {/* <FindYourLevel /> */}
            {/* <makeUsSpecial /> */}
            {/* <Advantages /> */}
            {/* <QuestionsAndAnswers /> */}
        </div>
    )
}
