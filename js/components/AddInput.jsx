import React from 'react';
import ReactDOM from 'react-dom';

import SingleInput from './SingleInput.jsx'

class AddInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputList : [],
        };
    }

    handleDeleteInput = (index) => {
        const newInputList = [];
        this.setState({
            inputList : newInputList
        });
    }

    handleAddInputClick = () => {
        this.setState({
            inputList : this.state.inputList.concat(<SingleInput onDone={this.handleDeleteInput}/>),
        })
    }

    render(){
        const listOfInputs = this.state.inputList.map( input => {
            return <div> {input} </div>;
        });
        return  <div>
                    {listOfInputs}
                    <button onClick={this.handleAddInputClick}> Add Input </button>
                </div>
    }
}

module.exports = AddInput;
