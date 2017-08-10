import React from 'react';
import ReactDOM from 'react-dom';

class Num extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            changed : false,
        };
    }

    updateState = () => {
        if ( typeof this.props.onNumber === 'function' ){
            this.props.onNumber(this.state.number, this.state.changed);
        }
    }

    handleNumberChange = (e) => {
        e.preventDefault();
        const newNumber = e.target.value;
        this.setState({
            number : newNumber,
            changed : true,
        });
        if ( typeof this.props.onNumber === 'function' ){
            this.props.onNumber(e.target.value, true);
        }
    }



    render(){
        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="number" placeholder="insert number" value={this.state.number} onChange={this.handleNumberChange}/>
                    </form>
                </div>
    }
}

module.exports = Num;
