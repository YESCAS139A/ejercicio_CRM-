export interface LabelComponentProps{
    name: string;
}

const LabelComponent = ({name}: LabelComponentProps) => {
    return (
        <div className="h-2 mb-5">
            <label>{name}</label>
        </div>
    )
}

export default LabelComponent
