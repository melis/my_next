import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import posts from './post/postReducer'
import reduxThunk from 'redux-thunk';

const rootReduser = combineReducers({ posts });

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

    const store = createStore(rootReduser,composeEnhancers(applyMiddleware(reduxThunk)));

 export default store