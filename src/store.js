import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { membersReducer, favoritesReducer, loaderReducer } from './reducers';

const reducer = combineReducers({
	members: membersReducer,
	favorites: favoritesReducer,
	loader: loaderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
