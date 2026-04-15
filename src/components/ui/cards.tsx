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

            <h3 className="text-xl font-family-secondary font-bold dark:font-bold text-background-200 dark:text-background-100/90">
                {project.title}
            </h3>

            <p className="flex-1/2 text-base tracking-wide font-medium dark:font-light text-background-200/90 dark:text-background-100/60">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
                {
                    project.technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs text-background-200/65 dark:text-background-100/60
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