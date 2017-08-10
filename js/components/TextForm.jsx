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

        const savedSubQuestions = localStorage.getItem('userSubQuestions');
        const subQuestionArray = JSON.parse(savedSubQuestions);

        const subFormular = subQuestionArray.map( (element) => {
            if ((element.index === this.props.index) && (element.condition === "Equals") && (element.answer === this.state.text)) {
                if (element.subType === 'yes / no') {
                    return  <Radio key ={element.index} question={element.subQuestion}/>
                } else if (element.subType === 'number') {
                    return  <div key={element.index}>
                                <Num  question={element.subQuestion} />
                            </div>
                } else {
                    return  <Txt key ={element.index} question={element.subQuestion}/>
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
