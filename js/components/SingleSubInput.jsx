import React from 'react';
import ReactDOM from 'react-dom';

class SingleSubInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subInputList : [],
        };
    }

    render(){
        return    <form>
                      Condition
                      <select>
                          <option> Equals </option>
                          <option> Greater than </option>
                          <option> Less than </option>
                      </select>
                      <input/>
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
