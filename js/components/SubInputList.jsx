import React from 'react';
import ReactDOM from 'react-dom';

import SingleSubInput from './SingleSubInput.jsx';

class SubInputList extends React.Component{
    constructor(props){
        super(props);
    }

    remove = (arg) => {
        this.props.onRemove(arg);
    }
    
    render(){
        return  <div>
                    {this.props.subInputList.map((input, index, onRemove) =>
                        <SingleSubInput key={`item-${index}`} index={index} onRemove2={this.remove}/>)}
                </div>
    }
}

module.exports = SubInputList;
