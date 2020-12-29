import React from "react";
/**
 * Component that alerts if you click outside of it
 */
interface OutsideClickProps {
    outsideClick?: (event: any) => void;
    children?: React.ReactNode;
    className?: string;
    onClick?: (event?: any) => void;
}
export default function CatchOutsideClick(props: OutsideClickProps): JSX.Element;
export {};
