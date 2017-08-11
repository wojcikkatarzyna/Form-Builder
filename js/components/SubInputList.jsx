import React from 'react';
import ReactDOM from 'react-dom';

import SingleSubInput from './SingleSubInput.jsx';

class SubInputList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num : this.props.num,
            inputCounter : this.props.inputCounter,
        }
    }

    remove = (arg) => {
        this.props.onRemove(arg);
    }

    render(){
        return  <div>
                    {this.props.subInputList.map((input, index, onRemove) =>
                        <SingleSubInput key={`subitem-${index}`} index={index} num={this.state.num} onRemove2={this.remove}/>)}
                </div>
    }
}

module.exports = SubInputList;
