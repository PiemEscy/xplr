import { ReactNode } from "react";

type DefaultLabelComponentProps = {
    className?: string;
    htmlFor?: string;
    label?: string;
};

export default function DefaultLabelComponent({
    className = "",
    htmlFor = "",
    label = "",
}: DefaultLabelComponentProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`${className} app-default-font-size leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 app-text-theme-secondary-color transition-colors`}
        >
            {label}
        </label>
    );
}
