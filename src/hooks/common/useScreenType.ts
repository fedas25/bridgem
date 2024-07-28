import { useEffect, useState } from "react";

export const useScreenType = () => {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handlerResizeScreen = () => {
            setWidthScreen(window.innerWidth)
        }

        window.addEventListener('resize', handlerResizeScreen);

        return () => {
            window.removeEventListener('resize', handlerResizeScreen);
        }
    }, [])

    if (widthScreen < 640) return "mobile"

    if (widthScreen > 640 && widthScreen < 960) return "tablet"

    if (widthScreen > 960) return "desktop"

    return "mobile" // default
}
