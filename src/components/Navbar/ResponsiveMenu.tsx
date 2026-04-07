import { motion, AnimatePresence } from "framer-motion";
import NavLink from "../ui/nav-link.tsx";
import Button from "../ui/button.tsx";


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
                        className="absolute top-26 left-0 w-full h-screen
                        flex flex-col items-center z-20"
                    >
                        <div className="w-[95%] md:w-[90%] text-xl font-semibold bg-background-200/20 backdrop-blur-sm
                        border border-background-200/30 
                        border-t-0
                        dark:border-background-100/20
                        pt-2 pb-10 rounded-b-2xl">
                            <ul className="flex flex-col justify-center items-center gap-10">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/projetos">Projetos</NavLink>
                                <NavLink href="/sobre">Sobre</NavLink>
                                <Button className="">Contato</Button>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}