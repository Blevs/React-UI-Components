import React from 'react';
import './Button.css';

const ActionButton = ({buttonStyle, handleAction, action, text}) => {
    return <div className={buttonStyle ? buttonStyle : "action-default"}
                onClick={() => handleAction(action)}>{text}</div>;
};

export default ActionButton;
