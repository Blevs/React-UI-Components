import React from 'react';
import './Button.css';

const NumberButton = ({buttonStyle, handleNumber, number}) => {
    return <div className={buttonStyle ? buttonStyle : "number-default"}
                onClick={() => handleNumber(number)}>{number}</div>;
};

export default NumberButton;
