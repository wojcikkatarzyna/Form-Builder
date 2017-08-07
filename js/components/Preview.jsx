import React from 'react';
import ReactDOM from 'react-dom';

const savedQuestions = localStorage.getItem('userQuestions');
class Preview extends React.Component{
    render(){
        return  <section className="preview">
                    <ul className="title">
                        <li> CREATE </li>
                        <li className="currentTitle"> PREVIEW </li>
                        <li> EXPORT </li>
                    </ul>
                    {savedQuestions}
                </section>
    }
}

module.exports = Preview;
