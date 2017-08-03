import React from 'react';
import ReactDOM from 'react-dom';

class SingleSubInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subInputList : [],
        };
    }

    handleAddSubInputClick = (e) => {
        e.preventDefault();
        this.setState({
            subInputList : this.state.subInputList.concat(<SingleSubInput/>),
        })
    }
    
    render(){
        const listOfSubInputs = this.state.subInputList.map( (subInput, index) => {
            return <div key = {index}> {subInput} </div>;
        });
        return    <div className = "form">
                      Condition
                      <select>
                          <option> Equals </option>
                          <option> Greater than </option>
                          <option> Less than </option>
                      </select>
                      <input/>
                      <br/>
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
                      {listOfSubInputs}
                  </div>
    }
}

module.exports = SingleSubInput;
