import React from 'react';
import ReactDOM from 'react-dom';

const savedQuestions = localStorage.getItem('userQuestions');
class Preview extends React.Component{
    render(){
        return  <section className="preview">
                    <div> PREVIEW </div>
                    {savedQuestions}
                </section>
    }
}

module.exports = Preview;
