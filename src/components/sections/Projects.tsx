import Card from "../ui/cards";
import { ProjectsData } from "../../mockData/data";



export default function Projects() {

    return (
        <section className="container flex flex-col items-center gap-10 my-14">
            <h1 className="text-primary text-3xl font-family-secondary font-extrabold">Projetos</h1>

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                gap-8
                max-w-6xl
            "
            >
        
                {
                    ProjectsData.map((project) => (
                        <Card
                            key={project.title}
                            project={project}
                        />
                    ))
                }
            </div>
        
        </section>
    )
}