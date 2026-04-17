import { motion, AnimatePresence } from "framer-motion";
import NavLink from "../../ui/nav-link.tsx";
import { NavbarMenu } from "../../../mockData/data.tsx";
import Button from "../../ui/button.tsx";


interface ResponsiveMenuProps {
    open: boolean;
}

export default function ResponsiveMenu({ open }: ResponsiveMenuProps) {

    return (
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div 
                        initial={{ opacity: 0, y: -100 }}
                        animate={{  opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        className="fixed top-26 left-0 w-full h-screen
                        flex flex-col items-center z-20"
                    >
                        <div className="w-[95%] md:w-[90%] text-xl font-semibold bg-background-200/20 backdrop-blur-sm
                        border border-background-200/30 
                        border-t-none
                        dark:border-background-100/20
                        pt-2 pb-10 rounded-b-2xl">
                            <ul className="flex flex-col justify-center items-center gap-10">
                                {
                                    NavbarMenu.map((item) => (
                                        <li key={item.id}>
                                            <NavLink href={item.link}>{item.nome}</NavLink>
                                        </li>
                                    ))
                                }
                                <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                                    Contato
                                </Button>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}