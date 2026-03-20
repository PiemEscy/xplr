import { ReactNode } from "react";

type DefaultGridProps = {
    children?: ReactNode;
    className?: string;
};

export default function DefaultGridComponent({
    children,
    className = "",
}: DefaultGridProps) {
    return (
        <div className={`${className} app-bg-theme-color-grid app-text-theme-color-grid rounded-md`}>
            {children}
        </div>
    );
}
