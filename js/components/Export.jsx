import React from 'react';
import ReactDOM from 'react-dom';

const savedQuestions = localStorage.getItem('userQuestions');
class Export extends React.Component{
    render(){
        return  <section className="export">
                    <ul className="title">
                        <li> CREATE </li>
                        <li> PREVIEW </li>
                        <li className="currentTitle"> EXPORT </li>
                    </ul>
                    <div className="exportBox">
                        {savedQuestions}
                    </div>
                </section>
    }
}

module.exports = Export;
