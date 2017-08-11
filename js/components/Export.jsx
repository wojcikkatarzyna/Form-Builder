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
        if (window.localStorage.length > 0) {
            return  <section className="export">
                        <ul className="title">
                            <li> <a href="http://localhost:8080"> CREATE </a> </li>
                            <li> <Link to="/preview"> PREVIEW </Link></li>
                            <li className="currentTitle"> <Link to="/export"> EXPORT </Link></li>
                        </ul>
                        <div className="exportBox">
                            {this.state.data}
                        </div>
                    </section>
        } else {
            return <div>
                      Please, complete Create section first
                      <br/>
                      <button> <Link to="/"> back to CREATE </Link> </button>
                  </div>
        }

    }
}

module.exports = Export;
