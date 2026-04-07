import React from "react";
import Navlink from "../ui/nav-link.tsx";
import ThemeButton from "../ui/theme-button.tsx";
import Button from "../ui/button.tsx";
import Menu from "../../assets/icons/menu.svg?react";
import Close from "../..//assets/icons/close.svg?react";
import { NavbarMenu } from "../../mockData/data.tsx";
import ResponsiveMenu from "./ResponsiveMenu.tsx";


export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <header className="w-full">
            <nav>
                <div className={`
                    w-[95%] lg:w-[90%] max-w-7xl mx-auto px-8 lg:px-12
                    fixed top-6 left-1/2 z-50 -translate-x-1/2
                    flex items-center justify-between
                    ${open ? "rounded-t-2xl border-b-0" : "rounded-2xl"}
                    border border-background-200/30 dark:border-background-100/20
                    bg-background-200/20 backdrop-blur-sm
                    text-primary-300 dark:text-primary-100`}>
                    <h1 className="text-2xl dark:text-background-100 font-bold py-6"><a href="#home"><span className="text-secondary">&#x003C;</span>Carlos Henrique <span className="text-secondary">&#x002F;&#x003E;</span></a></h1>

                    <div className="flex flex-row items-center gap-6 lg:gap-20">
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-2 lg:gap-6">
                                {NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <Navlink href={item.link}>{item.nome}</Navlink>
                                    </li>
                                ))}
                                <Button>Contato</Button>
                            </ul>
                        </div>

                        <div className="flex flex-row gap-4">
                            <ThemeButton />

                            <button onClick={() => setOpen(!open)}
                                className="md:hidden rounded-md cursor-pointer"
                            >
                                {open 
                                    ? <Close className="text-red-600 w-6 h-6 font-bold self-center" /> 
                                    : <Menu className="text-red-600 w-8 h-8 font-bold self-center" />
                                }
                            </button>
                        </div>
                    </div>
                </div>

            </nav>
            {/* Mobile Sidebar section */}

            <ResponsiveMenu open={open} />
        </header>
    )
}