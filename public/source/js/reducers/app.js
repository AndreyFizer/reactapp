import {combineReducers} from 'redux'
import {ApplicationStates, APP_LOGIN} from 'actions/app'
import {routerReducer} from 'react-router-redux'

function stateHandler(state = ApplicationStates.NOT_AUTHORISED, action) {
    switch (action.type) {
        case APP_LOGIN:
            return Object.assign({}, state, {
                applicationState: action.state
            });
        default:
            return state
    }
}

const reactAPP = combineReducers({
    applicationState: stateHandler,
    routing         : routerReducer
});

export default reactAPP;

