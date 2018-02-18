import React, {PropTypes} from 'react';
const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
            <div className="field">
                {
                <select
                name={name}
                value={value}
                onChange={onChange}
                className='form-control'>
                <option value="">{defaultOption}</option>
                {options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.text}</option>;
                })
                }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.IsRequired,
    label: PropTypes.string.IsRequired,
    onChange: PropTypes.func.IsRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
};

export default SelectInput      ;