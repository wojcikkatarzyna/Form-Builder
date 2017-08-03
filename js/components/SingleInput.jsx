import React from 'react';
import ReactDOM from 'react-dom';

import SingleSubInput from './SingleSubInput.jsx'

class SingleInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subInputList : [],
        };
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
        if ( typeof this.props.onDone === 'function' ){
            console.log(event.target);
            this.props.onDone(event.target);
        }
    }

    handleAddSubInputClick = (e) => {
        e.preventDefault();
        this.setState({
            subInputList : this.state.subInputList.concat(<SingleSubInput/>),
        })
    }

    render(){
        const listOfSubInputs = this.state.subInputList.map( subInput => {
            return <div> {subInput} </div>;
        });
        return <form>
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
                  {listOfSubInputs}
                  <hr/>
              </form>
    }
}

module.exports = SingleInput;
