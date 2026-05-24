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
            className={`${className} app-default-font-size leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-400 transition-colors`}
        >
            {label}
        </label>
    );
}
