"use client";

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
                        className="app-navbar-button-style"
                    >
                        {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                )}
            </>
        );
}