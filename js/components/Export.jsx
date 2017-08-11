import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class Export extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : localStorage.getItem('userQuestions'),
        }
    }

    handleClearLocalStorage = () => {
        localStorage.clear();
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                data : localStorage.getItem('userQuestions'),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render(){
        return  <section className="export">
                    <ul className="title">
                        <li> <Link onClick={this.handleClearLocalStorage} to="/"> CREATE </Link></li>
                        <li> <Link to="/preview"> PREVIEW </Link></li>
                        <li className="currentTitle"> <Link to="/export"> EXPORT </Link></li>
                    </ul>
                    <div className="exportBox">
                        {this.state.data}
                    </div>
                </section>
    }
}

module.exports = Export;
