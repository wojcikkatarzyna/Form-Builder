import React from 'react';
import ReactDOM from 'react-dom';

import SubInputList from './SubInputList.jsx'

class SingleInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subInputList : [],
            counter : 0,
        };
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
        console.log('klik delete');
        console.log(this.props.index);
        if ( typeof this.props.onRemove2 === 'function' ){
            this.props.onRemove2(this.props.index);
        }
    }

    handleAddSubInputClick = (e) => {
        e.preventDefault();
        this.setState({
            counter : this.state.counter + 1,
            subInputList : this.state.subInputList.concat([this.state.counter]),
        })
    }

    render(){
        if (this.state.counter === 0) {
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
        } else {
          return  <div>
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
                          <SubInputList subInputList={this.state.subInputList}/>
                    </div>
        }
    }
}

module.exports = SingleInput;
