type InputProps = {
    value: string;
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
    }
    // return <input type="text" value={props.value} onChange={props.handleChange} />
    return <input type="text" value={newValue} onChange={onChangeHandler} />
}