import React from 'react';
import './Keypad.css';
import { NumberButton, ActionButton } from '../ButtonComponents';

const Numbers = ({handleAction, handleNumber}) => {
    return <div className="numbers">
             <ActionButton action={false}
                           text={'clear'}
                           buttonStyle="number-wide"
                           handleAction={handleAction}/>
             {[...Array(9)].map((_, idx) =>
                                <NumberButton key={idx+1}
                                              number={idx+1}
                                              handleNumber={handleNumber}/>)}
             <NumberButton key={0}
                           number={0}
                           buttonStyle="number-half"
                           handleNumber={handleNumber}/>
             <NumberButton key={10}
                           number="."
                           buttonStyle="number-half"
                           handleNumber={handleNumber}/>
           </div>;
};

export default Numbers;
