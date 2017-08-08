import React from 'react';
import ReactDOM from 'react-dom';

import TextForm from './TextForm.jsx';
import NumberForm from './NumberForm.jsx';

class RadioForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked : '',
            yesChecked : false,
            noChecked : false,
        };
    }

    handleYesChecked = (e) => {
        e.preventDefault();
        this.setState({
            checked : 'yes',
            yesChecked : true,
            noChecked : false,
        })
    };

    handleNoChecked = (e) => {
        e.preventDefault();
        this.setState({
            checked : 'no',
            yesChecked : false,
            noChecked : true,
        })
    };


    render(){
        const savedSubQuestions = localStorage.getItem('userSubQuestions');
        const subQuestionArray = JSON.parse(savedSubQuestions);

        const subFormular = subQuestionArray.map( (element) => {
            if ((element.index === this.props.index) && (element.condition === "Equals") && (element.answer === this.state.checked)) {
                if (element.subType === 'yesno') {
                    return  <div key={element.index}>
                                {element.subQuestion}
                                <form>
                                    <input type="radio" name="yes" value="yes" checked={this.state.yesChecked} onChange={this.handleYesChecked}/> YES
                                    <input type="radio" name="no" value="no" checked={this.state.noChecked} onChange={this.handleNoChecked}/> NO
                                </form>
                            </div>
                } else if (element.subType === 'number') {
                    return  <div key={element.index}>
                                <NumberForm  question={element.subQuestion} />
                            </div>
                } else {
                    return  <div key={element.index}>
                                <TextForm question={element.subQuestion} />
                            </div>
                }
            } else {
                return  null;
            }
        })

        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="radio" name="yes" value="yes" checked={this.state.yesChecked} onChange={this.handleYesChecked}/> YES
                        <input type="radio" name="no" value="no" checked={this.state.noChecked} onChange={this.handleNoChecked}/> NO
                    </form>
                    <br/>
                    {subFormular}
                    <br/>
                </div>
    }
}

module.exports = RadioForm;
