import React from 'react';
import ReactDOM from 'react-dom';

import Num from './Num.jsx';
import Radio from './Radio.jsx';
import Txt from './Txt.jsx';

class NumberForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            changed : false,
        };
    }

    handleNumberCheck = (num, numChanged) => {
        console.log(num, numChanged);
        this.setState({
            number : num,
            changed : numChanged,
        })
    }

    render(){
        const savedSubQuestions = localStorage.getItem('userSubQuestions');
        const subQuestionArray = JSON.parse(savedSubQuestions);

        const subFormular = subQuestionArray.map( (element, index) => {
            if ((element.index === this.props.index) && (this.state.changed)){
                if  (((element.condition === "Equals") && (element.answer === this.state.number)) ||
                    ((element.condition === "Greater than") && (parseInt(element.answer) < parseInt(this.state.number))) ||
                    ((element.condition === "Less than") && (parseInt(element.answer) > parseInt(this.state.number)))) {
                      if (element.subType === 'yes / no') {
                          return  <Radio key={`${element.index}-${index}`} question={element.subQuestion}/>
                      } else if (element.subType === 'text') {
                          return <Txt key={`${element.index}-${index}`} question={element.subQuestion}/>
                      } else {
                        return  <Num key={`${element.index}-${index}`} question={element.subQuestion}/>
                      }
                } else {
                    return  null;
                }
            }
        })

        return  <div>
                    <Num question={this.props.question} onNumber={this.handleNumberCheck}/>
                    <br/>
                    {subFormular}
                    <br/>
                </div>
    }
}

module.exports = NumberForm;
