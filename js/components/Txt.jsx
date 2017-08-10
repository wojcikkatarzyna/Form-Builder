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
        console.log(this.state.text);
        if ( typeof this.props.onText === 'function' ){
            this.props.onText(this.state.text);
            console.log('funkcja ok, przekazuje props');
        } else {
            console.log('fincka not ok');
        }
    }

    render(){
        return  <div>
                    <span> {this.props.question} </span>
                    <form>
                        <input type="text" placeholder="insert text" onKeyUp={this.handleTextChange}/>
                    </form>
                </div>
    }
}

module.exports = Txt;
