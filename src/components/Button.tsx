type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    id: number
}
export const Button = (props: ButtonProps) => {
    return (
        <button onClick={event => props.handleClick(event,props.id)}>CLICK</button>
    )
}