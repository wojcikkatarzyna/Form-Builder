import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

import RadioForm from './RadioForm.jsx';
import TextForm from './TextForm.jsx';
import NumberForm from './NumberForm.jsx';

class Preview extends React.Component{

    render(){

          if (window.localStorage.length > 0) {
              const savedQuestions = localStorage.getItem('userQuestions');
              const questionArray = JSON.parse(savedQuestions);

              const formular = questionArray.map( (element, index) => {
                  if (element.type === 'yes / no') {
                      return  <RadioForm key={index} index={index} question={element.question} />
                  } else if (element.type === 'number') {
                      return  <NumberForm  key={index}  index={index} question={element.question} />
                  } else {
                      return  <TextForm  key={index}  index={index} question={element.question} />
                  }
              })

              return  <section className="preview">
                          <ul className="title">
                              <li> <Link to="/"> CREATE </Link></li>
                              <li className="currentTitle"> <Link to="/preview"> PREVIEW </Link></li>
                              <li> <Link to="/export"> EXPORT </Link></li>
                          </ul>
                          {formular}
                      </section>
          } else {
              return <div> Please, complete Create section first </div>
          }

      }
}

module.exports = Preview;
