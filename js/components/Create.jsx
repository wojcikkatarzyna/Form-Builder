import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

import InputList from './InputList.jsx';

class Create extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputList : [],
            counter : 0,
        };
    }

    handleAddInputClick = (e) => {
        e.preventDefault();
        this.setState({
            counter : this.state.counter + 1,
            inputList : this.state.inputList.concat([this.state.counter]),
        })
    }

    handleDeleteInput(index) {
        console.log('usuwasz',index);
        console.log('this',this);
        console.log('this.inputList:',this.state.inputList);
        let inputList = this.state.inputList;
        //inputList.splice(index, 1);
        // this.setState({
        //   inputList : inputList
        // })
    }

    render(){
        if (this.state.counter === 0) {
            return <section className="create">
                        <ul className="title">
                            <li className="currentTitle"> <Link to="/"> CREATE </Link></li>
                            <li> <Link to="/preview"> PREVIEW </Link></li>
                            <li> <Link to="/export"> EXPORT </Link></li>
                        </ul>
                        <button onClick={this.handleAddInputClick}> Add Input </button>
                    </section>
        } else {
          return  <section className="create">
                      <ul className="title">
                          <li className="currentTitle"> <Link to="/"> CREATE </Link></li>
                          <li> <Link to="/preview"> PREVIEW </Link></li>
                          <li> <Link to="/export"> EXPORT </Link></li>
                      </ul>
                      <InputList inputList={this.state.inputList}  onRemove={this.handleDeleteInput}/>
                      <button onClick={this.handleAddInputClick}> Add Input </button>
                  </section>
        }
    }
}

module.exports = Create;
