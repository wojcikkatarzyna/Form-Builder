import React from 'react';
import ReactDOM from 'react-dom';

class Radio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked : '',
            yesChecked : false,
            noChecked : false,
        };
    }

    handleAnswerChecked = (e) => {
        e.preventDefault();
        this.setState({
            checked : e.currentTarget.value,
            yesChecked : (e.currentTarget.value === "yes") ? true : false,
            noChecked : (e.currentTarget.value === "yes") ? false : true,
        })
        if ( typeof this.props.onCheck === 'function' ){
            this.props.onCheck(e.currentTarget.value);
        }
    };

    render(){
        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="radio" name="yes" value="yes" checked={this.state.yesChecked} onChange={this.handleAnswerChecked}/> YES
                        <input type="radio" name="no" value="no" checked={this.state.noChecked} onChange={this.handleAnswerChecked}/> NO
                    </form>
                </div>
    }
}

module.exports = Radio;
