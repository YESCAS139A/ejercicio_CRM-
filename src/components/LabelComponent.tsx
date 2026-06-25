export interface labelComponentProps{
    name: string;
    className?: string;
}

const LabelComponent = ({name}: labelComponentProps) => {
    return (
        <div className="h-2 mb-5">
            <label>{name}</label>
        </div>
    )
}

export default LabelComponent
