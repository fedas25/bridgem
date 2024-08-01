import { Teachers, Courses, Cover, FindYourLevel, Advantages, MakeUsSpecial, HowStartLearning, QuestionsAndAnswers } from "src/components/pages/main"
import style from "./style.module.css"

export const Main = () => {
    return (
        <div className={style.container}>
            <Cover />
            <Courses />
            <HowStartLearning />
            <FindYourLevel />
            <MakeUsSpecial />
            <Advantages />
            <Teachers />
            <QuestionsAndAnswers />
        </div>
    )
}
