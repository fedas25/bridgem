import cn from "classnames";
import { useState, useRef, useEffect, Factory } from "react";
import style from "./style.module.css";
import { CardCourse } from "./cardCourse";
import { useScreenType } from "src/hooks/common/useScreenType";

type Props = {
    setHandlerLeft?: (handler: () => void) => void
    setHandlerRight?: (handler: () => void) => void
};

const gapItems = 50

const cards: number[] = [1, 2, 4]

// TODO сделать ограничение пролистывания у десктопа

// TODO screenType везде вынести в App и передавать как контекст

// TODO попробовать вынести весь функционал для работы в хук кастомный или компонент

// TODO перенести в папку с общими компонентами

export default ({ setHandlerLeft, setHandlerRight }: Props) => {
    const ref = useRef(null);
    const refCArds = useRef(null);

    const [offset, setOffset] = useState(0);
    const [widthItem, setWidthItem] = useState(0);
    const [widthCards, setWidthCards] = useState(0);
    const [startX, setStartX] = useState(0);
    const [activeCardNumber, setActiveCardNumber] = useState(0);
    const screenType = useScreenType();

    useEffect(() => {
        const offsetWidth = ref.current != null ? ref.current['offsetWidth'] : 0;
        setWidthItem(offsetWidth);
    }, [ref.current]);

    useEffect(() => {
        const widthCards = refCArds.current != null ? refCArds.current['offsetWidth'] : 0;
        setWidthCards(widthCards);
    }, []);

    useEffect(() => {
        const newOffset = (widthItem + gapItems) * activeCardNumber
        setOffset(-newOffset)
    }, [activeCardNumber, widthItem]);

    useEffect(() => {
        if (setHandlerLeft) setHandlerLeft(() => handlerLeft)
        if (setHandlerRight) setHandlerRight(() => handlerRight)
    }, [setHandlerLeft, setHandlerRight])

    const handleTouchStart = (e: React.SyntheticEvent): void => {
        const clientX = Math.floor(e.changedTouches[0].clientX);
        setStartX(clientX);
    };

    const handleTouchMove = (e: React.SyntheticEvent): void => {
        if (startX === 0) return;

        const xDiff = e.changedTouches[0].clientX - startX;
        xDiff > 0 ? handlerRight() : handlerLeft();

        setStartX(0);
    };

    const handlerLeft = () => {
        if (activeCardNumber + 1 >= cards.length) return;
        setActiveCardNumber(activeCardNumber + 1);
    };

    const handlerRight = () => {
        if (activeCardNumber === 0) return;
        setActiveCardNumber(activeCardNumber - 1);
    };

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} ref={ref} className={style.container}>
            <div ref={refCArds} style={{ transform: `translateX(${offset}px)` }} className={style.content}>
                <CardCourse />
                <CardCourse />
                <CardCourse />
            </div>
            {
                screenType !== "desktop" ? (
                    <div className={style.nav}>
                        {cards.map((value: number, index: number) => {
                            return <div key={value} className={cn({ [style.active]: activeCardNumber === index })}></div>;
                        })}
                    </div>
                ) : null
            }
        </div>
    );
};
