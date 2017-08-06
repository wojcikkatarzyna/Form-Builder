import React from 'react';
import ReactDOM from 'react-dom';

import SingleSubInput from './SingleSubInput.jsx';

class SubInputList extends React.Component{

    render(){
        return  <div>
                    {this.props.subInputList.map((input, index) =>
                        <SingleSubInput key={`item-${index}`} index={index}/>)}
                </div>
    }
}

module.exports = SubInputList;
