import Button from "../ui/button";
import Code from "../../assets/img/code-ilustration.png"



export default function Contact() {
    return(
        <div id="contact" className="container flex flex-col items-center py-10 gap-8">
            <h1 className="text-primary font-family-secondary text-3xl font-extrabold">Sobre mim</h1>

            <div 
                className="
                flex flex-col lg:flex-row 
                p-5 md:mx-8 gap-4 md:gap-20 rounded-2xl 
                text-background-200 dark:text-background-100/60
                bg-background-200/30 dark:bg-primary/10 backdrop-blur-sm
                border border-secondary
                "
            >
                <div className="flex flex-col flex-1/2 py-4 gap-5">
                    <div>
                        <h1 className="text-2xl text-secondary font-bold">Quem é o Carlos Henrique?</h1>
                        <h2 className="text-background-200/70 dark:text-background-100/30 font-bold">Desenvolvedor Front-End | Web Designer</h2>
                    </div>
                    <div className="flex flex-col gap-3 font-medium dark:font-light">
                        <p>Sou desenvolvedor front-end apaixonado por criar interfaces que vão além do comum.</p>
                        <p>Acredito que um bom projeto não é só sobre funcionar, mas sobre transmitir estilo, energia e identidade. Por isso, busco unir design e código para construir experiências modernas, responsivas e marcantes.</p>
                        <p>Atualmente trabalho com React, Tailwind, TypeScript e JavaScript, e estou expandindo minhas habilidades para o desenvolvimento fullstack com Node.js e Golang.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row md:mt-5 md:mx-10 justify-around gap-6">
                        <Button
                            onClick={() => window.open("https://github.com/HenryMiles02/", "_blank")}
                        >GITHUB</Button>
                        <Button
                            onClick={() => window.open("https://www.linkedin.com/in/carlos-henrique02/", "_blank")}
                        >LINKEDIN</Button>
                        <Button
                            onClick={() => window.open("https://www.instagram.com/carlos_oliveira.dev/", "_blank")}
                        >INSTAGRAM</Button>
                    </div>
                </div>
                <div className="flex flex-1/2">
                    <img
                        src={Code}
                        className="w-full rounded-md md:rounded-2xl"
                        alt="Imagem de um script"
                    />
                </div>
            </div>
        </div>
    )
}