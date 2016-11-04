import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import LoginView from 'components/auth/loginView';
import AppReducer from 'reducers/app';

// ReactDOM.render(
// <Provider store={store}>
//     <App />
//     </Provider>,
//     document.getElementById('wrapper')
// );

const store = createStore(AppReducer);

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={LoginView} />
    </Router>,
    document.getElementById('wrapper')
);