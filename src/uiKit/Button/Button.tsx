import cn from "classnames";
import { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
    children: ReactNode;
    classes?: (string | undefined)[];
    fullWidth?: boolean;
};

export const Button = ({ children, classes = [], fullWidth = false }: Props) => {
    return (
        <button
            className={cn(...classes, style.container)}
            style={{
                width: fullWidth ? "100%" : "",
            }}
        >
            {children}
        </button>
    );
};
