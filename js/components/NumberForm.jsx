import React from 'react';
import ReactDOM from 'react-dom';

import RadioForm from './RadioForm.jsx';
import TextForm from './TextForm.jsx';

class NumberForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            changed : false,
        };
    }

    handleNumberChange = (e) => {
        e.preventDefault();
        this.setState({
            number : e.target.value,
            changed : true,
        });
    }

    render(){
        const savedSubQuestions = localStorage.getItem('userSubQuestions');
        const subQuestionArray = JSON.parse(savedSubQuestions);

        const subFormular = subQuestionArray.map( (element) => {
            if ((element.index === this.props.index) && (this.state.changed)){
                if  (((element.condition === "Equals") && (element.answer === this.state.number)) ||
                    ((element.condition === "Greater than") && (parseInt(element.answer) < parseInt(this.state.number))) ||
                    ((element.condition === "Less than") && (parseInt(element.answer) > parseInt(this.state.number)))) {
                      console.log(element.subType);
                      if (element.subType === 'yesno') {
                          return  <div key={element.index}>
                                      <RadioForm question={element.subQuestion} />
                                  </div>
                      } else if (element.subType === 'text') {
                          return <div> Halo </div>
                        // return   <div key={element.index}>
                        //              <TextForm question={element.subQuestion} />
                        //          </div>
                      } else {
                        return  <div key={element.index}>
                                    <span> {element.subQuestion} </span>
                                    <form>
                                        <input type="number" placeholder="insert number"/>
                                    </form>
                                    <br/>
                                </div>
                      }
                } else {
                    return  null;
                }
            }
        })

        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="number" placeholder="insert number" onChange={this.handleNumberChange}/>
                    </form>
                    <br/>
                    //{subFormular}
                    <br/>
                </div>
    }
}

module.exports = NumberForm;
