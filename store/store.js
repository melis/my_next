import { createStore, applyMiddleware, combineReducers  } from 'redux';
import posts from './post/postReducer'
import reduxThunk from 'redux-thunk';

const rootReduser = combineReducers({ posts });
 const store = createStore(rootReduser,applyMiddleware(reduxThunk));

 export default store