import React, { useEffect } from "react";
import Sun from '../../assets/icons/sun.svg?react';
import Moon from '../../assets/icons/moon.svg?react';


export default function ThemeButton() {

    const [dark, setDark] = React.useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? true : false;
    })

    useEffect(() => {
        const html = document.documentElement;
        
        if(dark) {
            html.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            html.classList.remove("dark")
            localStorage.removeItem("theme")
        }
    }, [dark])

    return (
        <button onClick={() => setDark(!dark)} className="cursor-pointer px-2 py-2 border-2 border-primary-300 border-secondary rounded-full transition-all">
            {dark ? <Moon className='text-background-100' /> : <Sun className='text-background-300' /> }
        </button>
    )
}