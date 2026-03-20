import {Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SkeletonLineComponent from "./SkeletonLineComponent";

export default function ThemeToggleFixComponent() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

        return ( 
            <>
                {!mounted ? (
                    <SkeletonLineComponent variant="circle" className="h-9 w-9" />
    
                ) : (
                    <button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="top-4 right-4 z-50 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all cursor-pointer"
                    >
                        {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                )}
            </>
        );
}