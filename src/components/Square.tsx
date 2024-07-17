import { useIsPresent, motion, MotionProps } from "framer-motion";
import { memo, useMemo } from "react";

export interface ISquare {
    id: number,
    color: `#${string}` | `var(--${string})`,
}

interface ISquareProps extends ISquare {
    className?: string
}

export const Square = memo<ISquareProps>(({ color, className }) => {
    const isPresent = useIsPresent();

    const animations = useMemo<MotionProps>(() => ({
        style: {
            position: isPresent ? "static" : "absolute"
        },
        initial: {
            transform: "translateX(-100%)"
        },
        animate: {
            transform: "translateX(0px)"
        },
        exit: {
            transform: "translateX(100vw)"
        },
        transition: { duration:  .2 }
    }), [isPresent]);

    return (
        <motion.div className={className} {...animations} layout style={{ background: color }}/>
    );
})