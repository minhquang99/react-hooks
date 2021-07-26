import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    //object destrucrtring
    const { onSubmit } = props;
    const [value, setValue] = useState(['']);

    function handleValue(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formValues = {
            title: value
        }
        onSubmit(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleValue}
            >
            </input>

        </form>
    );
}

export default TodoForm;