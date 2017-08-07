import React from 'react';
import ReactDOM from 'react-dom';

class Preview extends React.Component{

    addForm = (question, type) => {
        if (type === 'yes/no') {
            return  <div>
                        <span>question</span>
                          <form>
                              <input type="radio" value="yes"> Yes </input>
                              <input type="radio" value="no"> No </input>
                          </form>
                    </div>
        } else if (type === 'number') {
            return  <div>
                        <span>question</span>
                          <form>
                              <input type="number" placeholder="insert number"/>
                          </form>
                    </div>
        } else {
            return  <div>
                        <span>question</span>
                          <form>
                              <input type="text" placeholder="insert text"/>
                          </form>
                    </div>
        }
    }

    render(){
          const savedQuestions = localStorage.getItem('userQuestions');
          const questionArray = JSON.parse(savedQuestions);
          const formular = questionArray.map( (element, index) => {
              if (element.type === 'yes / no') {
                  return  <div key={index}>
                              <span> {element.question} </span>
                              <form>
                                  <input type="radio" name="yes" value="yes"/> YES
                                  <input type="radio" name="no" value="no"/> NO
                              </form>
                              <br/>
                          </div>
              } else if (element.type === 'number') {
                  return  <div key={index}>
                              <span> {element.question} </span>
                              <form>
                                  <input type="number" placeholder="insert number"/>
                              </form>
                              <br/>
                          </div>
              } else {
                  return  <div key={index}>
                              <span> {element.question} </span>
                              <form>
                                  <input type="text" placeholder="insert text"/>
                              </form>
                              <br/>
                          </div>
              }
          })

          return  <section className="preview">
                      <ul className="title">
                          <li> CREATE </li>
                          <li className="currentTitle"> PREVIEW </li>
                          <li> EXPORT </li>
                      </ul>
                      {formular}
                  </section>
      }
}

module.exports = Preview;
