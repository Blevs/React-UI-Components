import React from 'react';
import './Keypad.css';
import Numbers from './Numbers.js';
import Sidepanel from './Sidepanel.js';

const Keypad = ({handleAction, handleNumber}) => {
    return <div className="keypad">
             <Numbers handleAction={handleAction} handleNumber={handleNumber} />
             <Sidepanel handleAction={handleAction} />
           </div>;
};

export default Keypad;
