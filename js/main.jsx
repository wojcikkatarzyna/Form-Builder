import React from 'react';
import ReactDOM from 'react-dom';
// import { Router,
//     Route,
//     Link,
//     IndexLink,
//     IndexRoute,
//     hashHistory
// } from 'react-router';

import Create from './components/Create.jsx';
import Preview from './components/Preview.jsx';
import Export from './components/Export.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component{
        render(){
            return(   <div>
                          <header> FORM BUILDER </header>
                          <main>
                              <Create />
                              <Preview />
                              <Export />
                          </main>
                          <footer> Form Builder | Katarzyna Wójcik </footer>
                      </div>
            );
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});
