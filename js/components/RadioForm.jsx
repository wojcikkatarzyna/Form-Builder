import React from 'react';
import ReactDOM from 'react-dom';

import Num from './NumberForm.jsx';
import Radio from './Radio.jsx';
import Txt from './Txt.jsx';

class RadioForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked : '',
        };
    }

    handleCheckedCheck = (check) => {
        this.setState({
            checked : check,
        })
    }

    render(){
        const savedSubQuestions = localStorage.getItem('userSubQuestions');
        const subQuestionArray = JSON.parse(savedSubQuestions);

        const subFormular = subQuestionArray.map( (element) => {
            console.log('1etap');
            if ((element.index === this.props.index) && (element.condition === "Equals") && (element.answer === this.state.checked)) {
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
                    <Radio question={this.props.question} onCheck={this.handleCheckedCheck}/>
                    <br/>
                    {subFormular}
                    <br/>
                </div>
    }
}

module.exports = RadioForm;
