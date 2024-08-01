import style from "./style.module.css";

type Props = {
    img: string,
    name: string,
    text: string
}

export const Card = ({ img, name, text }: Props) => {
    return (
        <div className={style.card}>
            <img src={img} />
            <div className={style.name}>
                {name}
            </div>
            <div className={style.text}>
                {text}
            </div>
        </div>
    )
}
