import React from 'react';
import ReactDOM from 'react-dom';

class SingleSubInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subInputList : [],
            counter : 0,
        };
    }

    handleAddSubInputClick = (e) => {
        e.preventDefault();
        console.log('dodano');
        this.setState({
            counter : this.state.counter + 1,
            subInputList : this.state.subInputList.concat([this.state.counter]),
        })
    }

    render(){
            return <div className = "singleSubInput">
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
                      </div>
    }
}

module.exports = SingleSubInput;
