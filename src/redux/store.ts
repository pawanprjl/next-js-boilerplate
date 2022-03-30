import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunk];

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // specify extension's options like name, actionBlacklist, actionCreators, serialize ...
        }) : compose;

const appReducer = combineReducers({
    ...reducers,
});

const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
