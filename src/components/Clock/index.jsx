import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

Clock.propTypes = {

};

function Clock(props) {

    const { timeString } = useClock();
    return (
        <h3>{`Time now: ${timeString}`}</h3>
    );
}

export default Clock;