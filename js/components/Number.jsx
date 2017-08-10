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

    handleNumberChange = (e) => {
        e.preventDefault();
        this.setState({
            number : e.target.value,
            changed : true,
        });
        if ( typeof this.props.onNumber === 'function' ){
            this.props.onNumber(this.state.number, this.state.changed);
        }
    }

    render(){
        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="number" placeholder="insert number" onChange={this.handleNumberChange}/>
                    </form>
                </div>
    }
}

module.exports = Num;
