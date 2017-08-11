import React from 'react';
import ReactDOM from 'react-dom';

import SingleInput from './SingleInput.jsx';

class InputList extends React.Component{
    constructor(props){
        super(props);
    }

    remove = (arg) => {
        this.props.onRemove(arg);
    }

    render(){
        return  <div>
                    {this.props.inputList.map((input, index, onRemove) =>
                        <SingleInput key={`item-${index}`} index={index} num={index} onRemove2={this.remove}/>)}
                </div>
    }
}

module.exports = InputList;
