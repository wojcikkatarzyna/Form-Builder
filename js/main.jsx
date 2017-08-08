import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

import Create from './components/Create.jsx';
import Preview from './components/Preview.jsx';
import Export from './components/Export.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component{
        render(){
            return(  <Router history={hashHistory}>
                          <Route path='/' component={Create}/>
                          <Route path='/preview' component={Preview}/>
                          <Route path='/export' component={Export}/>
                      </Router>
            );
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});
