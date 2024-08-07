import style from "./style.module.css"
import cn from "classnames";
import cross from "src/assets/Icons/cross-faq.svg";
import { useState } from "react";

const text = [
  {
    question: "1 этап",
    answer: "жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо",
    hour: "12 часов"
  },
  {
    question: "1 этап",
    answer: "жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо",
    hour: "12 часов"
  },
  {
    question: "1 этап",
    answer: "жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо",
    hour: "12 часов"
  },
  {
    question: "1 этап",
    answer: "жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо жи ши уши, собака чай, компот один вода кукла дерево поле небо",
    hour: "12 часов"
  },
]

type PropsFaq = {
  question: string,
  answer: string,
  hour: string
}

// TODO сделвть 1 компонент на список

const Stage = ({ question, answer, hour }: PropsFaq) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={style.faq}>
      <div className={style.question} onClick={() => setIsHidden(!isHidden)}>
        <div>
          <p>{question}</p>
          <span>{hour}</span>
        </div>
        <img src={cross} className={cn({ [style.rotate]: !isHidden })} />
      </div>
      <div className={cn(style.concealer, { [style.hidden]: isHidden })}>
        <div className={style.answer}>
          {answer}
        </div>
      </div>
    </div>
  )
}

export const Stages = () => {
  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.title}>
        Программа обучения основана на лучших учебных пособиях
      </div>
      <div className={style.containerStages}>
        <div style={{ borderTop: "2px solid var(--color-gray-border)" }}></div>
        {text.map((value, index) =>
          <Stage
            key={index}
            question={value.question}
            answer={value.answer}
            hour={value.hour}
          />
        )}
      </div>
    </div>
  )
}
