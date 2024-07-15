import { createStore, applyMiddleware } from 'redux';
import { thunk }  from 'redux-thunk';
import rootReducer from '../reducers/index';
// import logger from 'redux-logger';

//library helpers that run before an action hits the reducer
// before an action hits the reducer, the action hits the middleware first 
// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

//root reducer
// need a reducer to create a store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;