import React from 'react';
import ReactDOM from 'react-dom';

import SingleSubInput from './SingleSubInput.jsx'

class SingleInput extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         inputList : [],
    //     };
    // }

    handleDeleteClick = (e) => {
        e.preventDefault();
        console.log('klik delete');
        console.log(this.props.index);
        if ( typeof this.props.onRemove2 === 'function' ){
            this.props.onRemove2(this.props.index);
        }
    }
    //
    // handleAddSubInputClick = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         subInputList : this.state.subInputList.concat(<SingleSubInput/>),
    //     })
    // }

    render(){
        return <div>
                        Question
                        <input type="text"/>
                        <br/>
                        Type
                        <select>
                            <option> text </option>
                            <option> number </option>
                            <option> yes / no </option>
                        </select>
                        <br/>
                        <button className = "subInput" onClick={this.handleAddSubInputClick}> Add Sub-Input </button>
                        <button className = "delete" onClick={this.handleDeleteClick}> Delete </button>
                        <hr/>
                  </div>
    }
}

module.exports = SingleInput;
