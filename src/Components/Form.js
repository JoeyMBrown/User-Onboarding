import FormInput from './FormInput';

export default function Form(props) {
    const { inputs, formValues, onChangeHandler, onSubmit } = props;
    return (
        <form>
            {
                inputs.map((input, index) => <FormInput key={index} input={input} formValues={formValues} onChangeHandler={onChangeHandler} />)
            }
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}