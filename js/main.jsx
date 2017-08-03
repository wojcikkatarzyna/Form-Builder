import React from 'react';
import ReactDOM from 'react-dom';
// import { Router,
//     Route,
//     Link,
//     IndexLink,
//     IndexRoute,
//     hashHistory
// } from 'react-router';

import AddInput from './components/AddInput.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component{
        render(){
            return(
                <AddInput />
            );
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});
