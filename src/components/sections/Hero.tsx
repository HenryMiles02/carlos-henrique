import { motion } from "framer-motion"
import { SlideLeft, SlideRight } from "../../assets/utility/animation"
import Perfil from "/public/perfil.png"


export default function Hero() {

    return (
        <main id="home" className="container grid-cols-1 md:grid-cols-2 grid
         min-h-162.5 md:gap-20 py-24 md:0 relative">
            {/* Hero Info */}
            <div className="flex flex-col justify-center py-14 md:py-0 text-center md:text-left space-y-6">
                <motion.div 
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-2xl text-background-300 dark:text-background-100">
                    <h1 className="font-extrabold text-secondary">Hello Word!</h1>
                    <h1>Meu nome é <span className="text-secondary font-extrabold">Carlos Henrique</span>.</h1>
                    <h1>Sou <span className="text-secondary font-extrabold ">Desenvolvedor Front-End</span>.</h1>
                </motion.div>

                <motion.div
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-xl font-semibold text-background-200/80 dark:text-background-100/80">
                    <p>Desenvolvedor Web sempre procurando aprender, sempre apaixonado por tecnologia, desenvolvendo soluções para quem precisa.</p>
                </motion.div>
                
            </div>
            {/* Hero Image */}
            <motion.div 
            variants={SlideLeft(0.6)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-end items-center">
                <div className='w-87.5 h-87.5 rounded-full'>
                    <img src={Perfil} className="w-full h-full object-cover object-top rounded-full" alt="" />
                </div>
            </motion.div>
        </main>
    )
}