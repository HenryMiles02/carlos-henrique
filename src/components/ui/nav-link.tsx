


interface NavlinkProps {
    href: string;
    children: React.ReactNode;
}

export default function Navlink({ href, children }: NavlinkProps) {

    
    return (
        <a 
            href={href}
            className="
            inline-block py-1 px-3 
            font-medium
            text-background-200 dark:text-background-100
            border-b-2 border-transparent hover:border-secondary transition-all ease-in-out duration-300"
        >{children}</a>
    )
}