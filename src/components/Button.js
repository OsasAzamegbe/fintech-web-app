import React from 'react';
import './Button.css';

const STYLES = ["btn--primary", "btn--outline"]

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"]

const COLORS = ["primary", "blue", "red", "green"]

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const checkColor = COLORS.includes(buttonColor) ? buttonColor : ""

    return (
    <button type={type} onClick={onClick} className={`btn ${checkStyle} ${checkSize} ${checkColor}`} >{children}</button>
    )
}

export default Button;