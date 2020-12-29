import React, { useRef, useEffect, RefObject } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: RefObject<HTMLDivElement>, callback: ((event: any) => void )| undefined) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: { target: any; }) {
            const current = ref.current;
            if (current && !current.contains(event.target)) {
                callback && callback(event);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */

interface OutsideClickProps {
    outsideClick?: (event: any) => void;
    children?: React.ReactNode;
    className?: string;
    onClick?: (event?: any) => void 
}

export default function CatchOutsideClick(props: OutsideClickProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const {outsideClick, ...restProps} = props
    useOutsideAlerter(wrapperRef, outsideClick);

    return <div ref={wrapperRef} {...restProps}>{props.children}</div>;
}