import style from "./style.module.css";
import cn from "classnames";
import { Slider } from "src/uiKit/slider";
import { Card } from "./Card";
import advantage1 from "src/assets/Images/advantage1.svg"
import advantage2 from "src/assets/Images/advantage2.svg"
import advantage3 from "src/assets/Images/advantage3.svg"

const data = [
  {
    img: advantage1,
    name: "Гибкий график",
    text: "Вы сами определяете удобное для себя время для занятий. Мы предлагаем гибкость в расписании, чтобы адаптироваться к вашим занятостям и обстоятельствам."
  },
  {
    img: advantage2,
    name: "Свой темп",
    text: "У вас есть возможность изучать материалы в своём собственном темпе. Нет необходимости торопиться или задерживаться, вы сами контролируете скорость обучения."
  },
  {
    img: advantage3,
    name: "Комфортные онлайн-уроки",
    text: "Наши занятия проводятся в удобной онлайн-среде. Вы можете учиться из дома или любого другого места, которое для вас комфортно, без необходимости тратить время на дорогу."
  }
];

export const Advantages = () => {
  const { handlerLeft, handlerRight, ...propsSlider } = Slider.useSliderController()

  return (
    <div className={cn("container-padding", style.container)}>
      <div className={style.title}>
        В чем преимущества онлайн-занятий?
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