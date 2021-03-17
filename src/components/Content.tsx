interface ContentHeaderProps {
    title: string;
}

export function Content({ title }: ContentHeaderProps) {
    return (
        <header>
            <span className="category">
                Categoria:<span> {title}</span>
            </span>
        </header>
    );
}
