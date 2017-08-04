import React from 'react';
import ReactDOM from 'react-dom';

import SingleInput from './SingleInput.jsx';
import InputList from './InputList.jsx';

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
            //console.log(this.state.inputList[i].props.hasOwnProperty('number'));
            //console.log(typeof(this.state.inputList[i]));
            if (this.state.inputList[i] === '' ) {
                console.log('tablica');
            } else {
                if(this.state.inputList[i].props.number !== num) {
                  newInputList.push(this.state.inputList[i]);
                } else {
                  newInputList.push('');
                }
            }
        }
        this.setState({
            inputList : newInputList
        });
    }

    handleAddInputClick = () => {
        this.setState({
            counter : this.state.counter + 1,
            inputList : this.state.inputList.concat([this.state.counter]),
        })
        console.log(this.state.inputList);
    }

    remove(index) {
        console.log('usuwasz');
        console.log(this.state.inputList);
        // let inputList = this.state.inputList;
        // inputList.splice(index, 1);
        // this.setState({
        //   inputList : inputList
        // })
    }

    render(){
        if (this.state.counter === 0) {
            return <div>
                        <button onClick={this.handleAddInputClick}> Add Input </button>
                    </div>
        } else {
          return  <div>
                      <InputList inputList={this.state.inputList}  onRemove={this.remove}/>
                      <button onClick={this.handleAddInputClick}> Add Input </button>
                  </div>
        }
    }
}

module.exports = AddInput;
