import React from 'react';
import './Display.css';

const Display = ({total}) => {
    const num = Number(total),
          value = (total.length > 11
                   ? (num >= 99999999999 ? num.toExponential(5) : num.toPrecision(10))
                   : total);
    return <div className="display">{value}</div>;
};

export default Display;
