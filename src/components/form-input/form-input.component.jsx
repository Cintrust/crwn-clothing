import "./form-input.styles.scss"

const FormInput = ({handleChange, label, ...otherProps}) => {

    return (
        <div className='group'>
            <input className="form-input" {...otherProps} onChange={handleChange}/>
            {
                label ? (<label
                    className={`${otherProps.value.length > 0 ? "shrink" : ""} form-input-label`}
                    htmlFor="">
                    {label}
                </label>) : null
            }
        </div>
    );
}

export default FormInput;
