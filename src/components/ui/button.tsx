


export default function Button({ 
    children, 
    className,
    onClick }: { 
        className?: string;
        children: React.ReactNode; 
        onClick?: () => void }) {

    return (
        <button 
            onClick={onClick}
            className={`bg-secondary text-white font-semibold px-4 py-2 hover:shadow-lg hover:shadow-primary rounded-lg hover:bg-primary transition-all duration-300 cursor-pointer ${className || ""}`}
        >
            {children}
        </button>
    )
}