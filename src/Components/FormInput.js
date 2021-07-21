export default function FormInput(props) {
    const { name, type } = props.input;
    const { formValues, onChangeHandler } = props;
    return (
        <label htmlFor={name}>{name}:
            <input type={type} id={name} name={name} value={formValues[name]} onChange={onChangeHandler}/>
        </label>
    )
}