import {browserHistory} from 'react-router';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import 'history';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducers from '../reducers';

// Reducer
const reducer = combineReducers({
	...reducers,
	routing: routerReducer
});

// Store
const createStoreWithMiddleware = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const Store = createStoreWithMiddleware(reducer);

// Sync navigation with the store
const History = syncHistoryWithStore(browserHistory, Store);

// This is to implement analytics
//history.listen(location => analyticsService.track(location.pathname));

export const history = History;
export const store = Store;
