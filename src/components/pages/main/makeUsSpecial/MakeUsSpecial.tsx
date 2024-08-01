import style from "./style.module.css";
import { Slider } from "src/uiKit/slider";
import cn from "classnames";
import { useScreenType } from "src/hooks/common/useScreenType";
import feature1 from "src/assets/Images/feature1.svg"
import feature2 from "src/assets/Images/feature2.svg"
import feature3 from "src/assets/Images/feature3.svg"
import feature4 from "src/assets/Images/feature4.svg"
import feature5 from "src/assets/Images/feature5.svg"
import { Card } from "./Card";

const data = [
  {
    img: feature1,
    name: "Индивидуальный подход",
    text: "Мы заботимся о том, чтобы каждый ученик получил индивидуальное внимание и поддержку в своих учебных усилиях. Ведь для нас каждый ученик уникален и важен."
  },
  {
    img: feature2,
    name: "Разговорный английский",
    text: "Мы понимаем важность практики разговорного английского, поэтому в наших курсах уделяется особое внимание разговорной практике. У вас будет возможность участвовать в диалогах с преподавателем и другими студентами, а также применять полученные знания на практике в реальных ситуациях."
  },
  {
    img: feature3,
    name: "Лучшие учебные пособия",
    text: "Академические материалы основаны на лучших учебных пособиях, таких издательств как McMillan, Pearson, Cambridge Press и заданий, написанных нашими специалистами."
  },
  {
    img: feature4,
    name: "Удобный способ оплаты",
    text: "Оплата производиться через сервис Юkassa. Юkassa предоставляет множество вариантов оплаты, включая банковские карты (Visa, Mastercard, Мир и другие) и электронные кошельки. Вы можете выбрать тот тип оплаты, который будет удобен для вас: оплата за каждое занятие отдельно или за полный курс со скидкой в размере 15%. Это позволит значительно сэкономить. Не упустите возможность пройти курс по выгодной цене и улучшить свои навыки."
  },
  {
    img: feature5,
    name: "Преподаватели — настоящие профессионалы",
    text: "Наши преподаватели обладают богатым опытом и используют интерактивные методики для вовлечения студентов в обучающий процесс."
  }
];

export const MakeUsSpecial = () => {
  const { handlerLeft, handlerRight, ...propsSlider } = Slider.useSliderController()

  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.title}>
        Что делает нас особенными?
      </div>
      <div className={style.description}>
        <span>
          Удобный, доступный и эффективный английский
        </span>
        <span>
          Индивидуальные уроки
        </span>
        <span>
          Эффективные методики
        </span>
      </div>

      <Slider.View {...propsSlider} classes={[style.slider]}>
        {data.map(({ img, name, text }) => <Card key={name} img={img} name={name} text={text} />)}
      </Slider.View>

      <div className={style.listCards}>
        {data.map(({ img, name, text }) => <Card key={name} img={img} name={name} text={text} />)}
      </div>
    </div>
  );
};