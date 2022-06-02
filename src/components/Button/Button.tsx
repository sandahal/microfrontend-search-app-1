import React from "react";
import cn from "classnames";
import ButtonStyles from "./Button.module.scss";

export type ButtonProps = {
    type?: "primary" | "secondary" | "default",
    label: string
}

const Button: React.FC<ButtonProps> = ({ type = "primary", label }) => {

    const getButtonStyles = () => {
        switch (type) {
            case "primary":
                return ButtonStyles.primary;
            case "secondary":
                return ButtonStyles.secondary;
            default:
                return "";
        }
    }

    return <button className={cn(ButtonStyles.button, getButtonStyles())}>{label}</button>
}

export default Button;