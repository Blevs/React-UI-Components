import React from 'react';
import './Calculator.css';
import { Keypad } from '../KeypadComponents';
import Display from '../DisplayComponents';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total: 0,
                       stack: false,
                       action: false };
    }
    handleNumber = (num) => {
        this.setState({ total: (this.state.stack ? (10 * this.state.total + num) : num),
                        stack: (this.state.stack ? this.state.stack : this.state.total || num) });
    }
    handleAction = (action) => {
        if (action === true) { // '=' triggers stacked action
            this.setState({total: this.state.action
                           ? this.state.action(this.state.stack, this.state.total)
                           : this.state.total,
                           stack: false,
                           action: false });
        } else if (action === false) { // 'clear' clears total and stacks
            this.setState({ total: 0,
                            stack: false,
                            action: false });
        } else if (action) { // otherwise, stack action and total
            this.setState({ action: action,
                            total: 0,
                            stack: this.state.total });
        }
    }
    render() {
        return <div className="calculator">
                 <Display total={this.state.total} />
                 <Keypad handleAction={this.handleAction} handleNumber={this.handleNumber} />
               </div>;
    }
}

export default Calculator;
