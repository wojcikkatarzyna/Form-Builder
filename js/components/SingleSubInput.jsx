import React from 'react';
import ReactDOM from 'react-dom';

const subInputArray = [];

class SingleSubInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subInputList : [],
            counter : 0,
            index : this.props.index,
            num : this.props.num,
        };
    }

    // handleAddSubInputClick = (e) => {
    //     e.preventDefault();
    //     console.log('dodano');
    //     this.setState({
    //         counter : this.state.counter + 1,
    //         subInputList : this.state.subInputList.concat([this.state.counter]),
    //     })
    // }

    handleConditionChange = (e) => {
        e.preventDefault();
        this.setState({
            currentCondition : e.target.value,
        })
    }

    handleAnswerChange = (e) => {
        e.preventDefault();
        this.setState({
            currentAnswer : e.target.value,
        })
    }

    handleSubQuestionChange = (e) => {
        e.preventDefault();
        this.setState({
            currentQuestion : e.target.value,
        })
    }

    handleTypeChange = (e) => {
        e.preventDefault();
        this.setState({
            currentType : e.target.value,
        })
        subInputArray.push({
            index : this.state.index,
            condition : this.state.currentCondition,
            answer : this.state.currentAnswer,
            subQuestion : this.state.currentQuestion,
            subType : e.target.value,
        });
        const question = JSON.parse(localStorage.userQuestions);
        const questionIndex = this.state.num;
        question[this.state.num].subInput = subInputArray;
        localStorage.setItem("userQuestions", JSON.stringify(question));
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
        if ( typeof this.props.onRemove2 === 'function' ){
            this.props.onRemove2(this.props.index);
        }
    }

    render(){
            return <div className = "singleSubInput">
                          Condition
                          <select onChange={this.handleConditionChange}>
                              <option key="choose"> ---choose your condition--- </option>
                              <option key="equals"> Equals </option>
                              <option key="greater"> Greater than </option>
                              <option key="less"> Less than </option>
                          </select>
                          <input placeholder="please, type here your answer" onChange={this.handleAnswerChange}/>
                          <br/>
                          Question
                          <input type="text" placeholder="please, type here your question" onChange={this.handleSubQuestionChange}/>
                          <br/>
                          Type
                          <select onChange={this.handleTypeChange}>
                              <option key="choose"> ---choose type of answer--- </option>
                              <option key="text" value="text"> text </option>
                              <option key="number" value="number"> number </option>
                              <option key="radio" value="yes / no"> yes / no </option>
                          </select>
                          <br/>
                          <button className = "subInput" onClick={this.handleAddSubInputClick}> Add Sub-Input </button>
                          <button className = "delete" onClick={this.handleDeleteClick}> Delete </button>
                          <hr/>
                      </div>
    }
}

module.exports = SingleSubInput;
