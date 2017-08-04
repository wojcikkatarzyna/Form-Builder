import React from 'react';
import ReactDOM from 'react-dom';

import SingleInput from './SingleInput.jsx'

class AddInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputList : [],
            counter : 0,
        };
    }

    handleDeleteInput = (num) => {
        console.log(num);

      let newInputList = [];
      for (var i = 0; i < this.state.inputList.length; i++) {
        console.log('BRFORE IF' + this.state.inputList[i].props.number);
          if(this.state.inputList[i].props.number !== num) {
            console.log('IN IF' + this.state.inputList[i].props.number);
            newInputList.push(this.state.inputList[i]);
        }
      }
      this.setState({
          inputList : newInputList
      });
    }

    handleAddInputClick = () => {

        this.setState({
            counter : this.state.counter + 1,
            inputList : this.state.inputList.concat(<SingleInput number={this.state.counter} onDone={this.handleDeleteInput}/>),
        })
    }

    render(){
        const listOfInputs = this.state.inputList.map( input =>
            <div>
               {input}
            </div>
        );
        return  <div>
                    {listOfInputs}
                    <button onClick={this.handleAddInputClick}> Add Input </button>
                </div>
    }
}

module.exports = AddInput;
