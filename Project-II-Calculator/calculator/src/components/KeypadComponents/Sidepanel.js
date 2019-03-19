import React from 'react';
import './Keypad.css';
import { ActionButton } from '../ButtonComponents';

const actions = [{action: (a, b) => a / b, text: "÷"},
                        {action: (a, b) => a * b, text: "×"},
                        {action: (a, b) => a - b, text: "−"},
                        {action: (a, b) => a + b, text: "+"},
                 {action: true, text: "="}];

const Sidepanel = ({handleAction, handleNumber}) => {
    return <div className="sidepanel">
             {actions.map(({action, text}, idx) =>
                          <ActionButton key={idx}
                                        action={action}
                                        text={text}
                                        handleAction={handleAction}/>)}
           </div>;
};

export default Sidepanel;
