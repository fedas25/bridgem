import cn from "classnames";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import style from "./style.module.css";
import { useScreenType } from "src/hooks/common/useScreenType";

// TODO сделать нормальное ограничение у десктопа ( что бы сразу назад можно было кликнуть )
// TODO screenType везде вынести в App и передавать как контекст

const gapItems = 50

const useSliderController = () => {
    const ref = useRef(null);
    const refCArds = useRef(null);

    const [offset, setOffset] = useState(0);
    const [maxOffset, setMaxOffset] = useState(0);
    const [widthItem, setWidthItem] = useState(0);
    const [widthCards, setWidthCards] = useState(0);
    const [startX, setStartX] = useState(0);
    const [activeCardNumber, setActiveCardNumber] = useState(0);
    const [numberCards, setNumberCards] = useState(0);

    const screenType = useScreenType()

    useEffect(() => {
        const resizeHandler = () => {
            const widthCards = refCArds.current != null ? refCArds.current["clientWidth"] : 0;
            setWidthCards(widthCards);

            const offsetWidth = ref.current != null ? ref.current["clientWidth"] : 0;
            setWidthItem(offsetWidth);
        }

        resizeHandler() // для получения изначальных размеров

        window.addEventListener("resize", resizeHandler)

        return () => window.removeEventListener("resize", resizeHandler)
    })

    useEffect(() => {
        const maxOffset = widthCards - widthItem
        setMaxOffset(maxOffset < 0 ? 0 : maxOffset);
    }, [widthItem, widthCards]);

    useEffect(() => { // тут разделить работу с карточкой в десктопе и мобилке
        let newOffset = (widthItem + gapItems) * activeCardNumber
        if (screenType === "desktop") {
            newOffset = newOffset > maxOffset ? maxOffset : newOffset
        }
        setOffset(-newOffset)
    }, [activeCardNumber, widthItem]);

    const handleTouchStart = (e: React.TouchEvent): void => {
        const clientX = Math.floor(e.changedTouches[0].clientX);
        setStartX(clientX);
    };

    const handleTouchMove = (e: React.TouchEvent): void => {
        if (startX === 0) return;

        const xDiff = e.changedTouches[0].clientX - startX;
        xDiff > 0 ? handlerRight() : handlerLeft();

        setStartX(0);
    };

    const handlerLeft = () => {
        if (activeCardNumber + 1 >= numberCards) return;
        setActiveCardNumber(activeCardNumber + 1);
    };

    const handlerRight = () => {
        if (activeCardNumber === 0) return;
        setActiveCardNumber(activeCardNumber - 1);
    };

    return {
        ref,
        refCArds,
        handleTouchStart,
        handleTouchMove,
        offset,
        activeCardNumber,
        handlerLeft,
        handlerRight,
        setNumberCards
    }
}

type ViewProps = {
    refCArds: React.RefObject<HTMLDivElement>,
    handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void,
    handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void,
    offset: number,
    activeCardNumber: number,
    children: React.ReactNode,
    setNumberCards: React.Dispatch<React.SetStateAction<number>>,
    classes?: string[]
};

const View = forwardRef<HTMLDivElement, ViewProps>(({
    children,
    refCArds,
    handleTouchStart,
    handleTouchMove,
    offset,
    activeCardNumber,
    setNumberCards,
    classes = []
}, ref) => {
    const screenType = useScreenType();
    const numberChildren = React.Children.count(children)

    useEffect(() => {
        setNumberCards(numberChildren)
    }, [])

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} ref={ref} className={cn([...classes], style.container)}>
            <div ref={refCArds} style={{ transform: `translateX(${offset}px)` }} className={style.content}>
                {children}
            </div>
            {screenType !== "desktop" ? (
                <div className={style.nav}>
                    {Array(numberChildren).fill(0).map((_, index) => (
                        <div key={index} className={cn({ [style.active]: activeCardNumber === index })}></div>
                    ))}
                </div>
            ) : null}
        </div>
    );
});

export const Slider = {
    useSliderController,
    View
}
