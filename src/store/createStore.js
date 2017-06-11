import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

export default function (reducer = rootReducer, context = {}) {
    const middleware = [thunk.withExtraArgument(context)];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger({ collapsed: true }));
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, {}, composeEnhancers(
        applyMiddleware(...middleware)
    ));
}