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

    handleQuestionChange = (e) => {
        e.preventDefault();
        this.setState({
            currentQuestion : e.target.value,
        })
    }

    handleTypeChange = (e) => {
        e.preventDefault();
        console.log(this.state.currentQuestion, e.target.value);
        questionsArray.push({
            question: this.state.currentQuestion,
            type: e.target.value,
        });
        let question = JSON.stringify(questionsArray);
        localStorage.setItem("userQuestions", question);
    }

    render(){
        if (this.state.counter === 0) {
            return <div>
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
          return  <div>
                          Question
                          <input type="text"/>
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
                          <SubInputList subInputList={this.state.subInputList}/>
                    </div>
        }
    }
}

module.exports = SingleInput;
