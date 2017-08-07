import React from 'react';
import ReactDOM from 'react-dom';

const savedQuestions = localStorage.getItem('userQuestions');
class Export extends React.Component{
    render(){
        return  <section className="export">
                    <div className="title"> EXPORT </div>
                    {savedQuestions}
                </section>
    }
}

module.exports = Export;
