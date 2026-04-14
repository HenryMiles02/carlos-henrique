import Button from "./button";


export type Project = {
    image: string;
    title: string;
    description: string;
    technologies?: string[];
    link: string;
}

type CardProps = {
    project: Project;
}

export default function Card({ project }: CardProps) {
    return (
        <div
            className="
            w-88
            text-background-100
            bg-primary/10 backdrop-blur-sm
            border border-secondary
            rounded-lg p-5 gap-4
            flex flex-col
            transition hover:-translate-y-1
            hover:shadow-2xl hover:shadow-primary
            "
        >
            <img 
                src={project.image} 
                alt={project.title}
                className=" w-full max-h-42 bg-top rounded-md" 
            />

            <h3 className="text-lg font-secondary font-semibold">
                {project.title}
            </h3>

            <p className="flex-1/2 text-sm tracking-wide opacity-80">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
                {
                    project.technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs text-background-100/60
                            font-bold uppercase tracking-wide
                            bg-primary/20 border border-secondary px-4 py rounded"
                        >
                            {tech}
                        </span>
                    ))
                }
            </div>
            <Button onClick={() => window.open(project.link, "_blank") }>
                Veja o Projeto
            </Button>
        </div>
    )
}