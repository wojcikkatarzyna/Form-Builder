import React from 'react';
import ReactDOM from 'react-dom';

class Txt extends React.Component{
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
        if ( typeof this.props.onText === 'function' ){
            this.props.onText(e.target.value);
        }
    }

    render(){
        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="text" placeholder="insert text" value={this.state.text} onChange={this.handleTextChange}/>
                    </form>
                </div>
    }
}

module.exports = Txt;
