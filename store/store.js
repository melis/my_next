import { createStore, applyMiddleware, combineReducers  } from 'redux';
import posts from './post/postReducer'
import reduxThunk from 'redux-thunk';

const rootReduser = combineReducers({ posts });
export const store = createStore(rootReduser,applyMiddleware(reduxThunk));