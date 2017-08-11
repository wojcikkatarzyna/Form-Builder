import React from 'react';
import ReactDOM from 'react-dom';

import Num from './Num.jsx';
import Radio from './Radio.jsx';
import Txt from './Txt.jsx';

class TextForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
        };
    }

    handleTextCheck = (txt) => {
        this.setState({
            text : txt,
        })
    }

    render(){

        const savedQuestions = localStorage.getItem('userQuestions');
        const questionArray = JSON.parse(savedQuestions);
        const question = questionArray[this.props.index];

        const subFormular = question.subInput.map( (element, index) => {
            if ((element.condition === "Equals") && (element.answer === this.state.text)) {
                if (element.subType === 'yes / no') {
                    return  <Radio key={`${element.index}-${index}`} question={element.subQuestion}/>
                } else if (element.subType === 'number') {
                    return  <Num key={`${element.index}-${index}`} question={element.subQuestion} />
                } else {
                    return  <Txt key={`${element.index}-${index}`} question={element.subQuestion}/>
                }
            } else {
                return  null;
            }
        })

        return  <div>
                    <Txt question={this.props.question} onText={this.handleTextCheck}/>
                    <br/>
                    {subFormular}
                    <br/>
                </div>
    }
}

module.exports = TextForm;
