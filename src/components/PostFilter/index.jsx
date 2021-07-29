import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilter.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilter.defaultProps = {
    onSubmit: null
}

function PostFilter(props) {

    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState(['']);
    //debounce
    const typingTimeoutRef = useRef(null);

    function handleInputChange(e) {
        const value = e.target.value;
        setSearchTerm(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }

            onSubmit(formValues);
        }, 300);


    }

    return (
        <form>
            <input type="text"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default PostFilter;