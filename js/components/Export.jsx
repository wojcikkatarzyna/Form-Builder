import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

const savedQuestions = localStorage.getItem('userQuestions');

class Export extends React.Component{
    render(){
        return  <section className="export">
                    <ul className="title">
                        <li> <Link to="/"> CREATE </Link></li>
                        <li> <Link to="/preview"> PREVIEW </Link></li>
                        <li className="currentTitle"> <Link to="/export"> EXPORT </Link></li>
                    </ul>
                    <div className="exportBox">
                        {savedQuestions}
                    </div>
                </section>
    }
}

module.exports = Export;
