import {compose, createStore} from 'redux';
import {reducers} from './reducers';

export  const store = createStore(reducers, compose(
// @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));