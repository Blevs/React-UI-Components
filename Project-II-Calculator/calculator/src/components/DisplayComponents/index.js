import React from 'react';
import './Display.css';

const Display = ({total}) => {
    const length = total.toString().length,
          value = (length > 11
                   ? (total >= 99999999999 ? total.toExponential(5) : total.toPrecision(10))
                   : total);
    return <div className="display">{value}</div>;
};

export default Display;
