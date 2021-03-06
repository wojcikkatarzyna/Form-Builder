import React from 'react';
import ReactDOM from 'react-dom';

import SubInputList from './SubInputList.jsx'

const myStorage = localStorage;
const questionsArray = [];

class SingleInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subInputList : [],
            counter : 0,
            questionList : [],
            typeList : [],
            num : this.props.num,
        };
    }

    handleDeleteSubInput = (index) => {
        let subInputList = this.state.subInputList;
        subInputList.splice(index, 1);
        this.setState({
          subInputList : subInputList,
        })
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
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

    handleQuestionChange = (e) => {
        e.preventDefault();
        this.setState({
            currentQuestion : e.target.value,
        })
    }

    handleTypeChange = (e) => {
        e.preventDefault();
        questionsArray.push({
            question : this.state.currentQuestion,
            type : e.target.value,
            subInput : [],
        });
        let question = JSON.stringify(questionsArray);
        localStorage.setItem("userQuestions", question);
    }

    render(){
        if (this.state.counter === 0) {
            return <div className="singleInput">
                            Question
                            <input type="text" placeholder="please, type here your question" onChange={this.handleQuestionChange}/>
                            <br/>
                            Type
                            <select onChange={this.handleTypeChange}>
                                <option key="choose"> ---please, choose type of your answer--- </option>
                                <option key="text"> text </option>
                                <option key="number"> number </option>
                                <option key="radio"> yes / no </option>
                            </select>
                            <br/>
                            <button className = "subInput" onClick={this.handleAddSubInputClick}> Add Sub-Input </button>
                            <button className = "delete" onClick={this.handleDeleteClick}> Delete </button>
                            <hr/>
                      </div>
        } else {
          return  <div className="singleInput">
                          Question
                          <input type="text" placeholder="please, type here your question" onChange={this.handleQuestionChange}/>
                          <br/>
                          Type
                          <select onChange={this.handleTypeChange}>
                              <option key="choose"> ---choose type of answer--- </option>
                              <option key="text"> text </option>
                              <option key="number"> number </option>
                              <option key="radio"> yes / no </option>
                          </select>
                          <br/>
                          <button className = "subInput" onClick={this.handleAddSubInputClick}> Add Sub-Input </button>
                          <button className = "delete" onClick={this.handleDeleteClick}> Delete </button>
                          <hr/>
                          <SubInputList subInputList={this.state.subInputList} num={this.state.num} onRemove={this.handleDeleteSubInput}/>
                    </div>
        }
    }
}

module.exports = SingleInput;
