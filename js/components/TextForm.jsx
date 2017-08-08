import React from 'react';
import ReactDOM from 'react-dom';

import RadioForm from './RadioForm.jsx';
import NumberForm from './NumberForm.jsx';

class TextForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
        };
    }

    handleTextChange = (e) => {
        e.preventDefault();
        this.setState({
            text : e.target.value,
        });
    }

    render(){

        const savedSubQuestions = localStorage.getItem('userSubQuestions');
        const subQuestionArray = JSON.parse(savedSubQuestions);

        const subFormular = subQuestionArray.map( (element) => {
            if ((element.index === this.props.index) && (element.condition === "Equals") && (element.answer === this.state.text)) {
                if (element.subType === 'yesno') {
                    return  <div key={element.index}>
                                <RadioForm question={element.subQuestion} />
                            </div>
                } else if (element.subType === 'number') {
                    return  <div key={element.index}>
                                <NumberForm  question={element.subQuestion} />
                            </div>
                } else {
                    return  <div key={element.index}>
                                <span> {element.subQuestion} </span>
                                <form>
                                    <input type="text" placeholder="insert text" onKeyUp={this.handleTextChange}/>
                                </form>
                                <br/>
                            </div>
                }
            } else {
                return  null;
            }
        })

        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="text" placeholder="insert text" onChange={this.handleTextChange}/>
                    </form>
                    <br/>
                    {subFormular}
                    <br/>
                </div>
    }
}

module.exports = TextForm;
