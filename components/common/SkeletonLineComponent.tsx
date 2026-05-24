type SkeletonLineProps = {
    className?: string;
    variant?: "rectangular" | "rounded" | "circle";
};

export default function SkeletonLineComponent({
    className = "",
    variant = "rectangular",
}: SkeletonLineProps) {
    let shapeClass = "rounded";

    if (variant === "circle") {
        shapeClass = "rounded-full";
    } else if (variant === "rectangular") {
        shapeClass = "rounded";
    } else if (variant === "rounded") {
        shapeClass = "rounded-lg";
    }

    return (
        <div
            className={`${className} animate-pulse bg-zinc-300 dark:bg-zinc-600 ${shapeClass}`}
        />
    );
}
