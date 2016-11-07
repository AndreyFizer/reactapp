import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import AppView from 'components/app/appView';
import LoginView from 'components/auth/loginView';
import UserListView from 'components/user/userListView';
import AppReducer from 'reducers/app';

const store = createStore(AppReducer);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppView}>
                <Route path="#users" component={UserListView} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('wrapper')
)
;