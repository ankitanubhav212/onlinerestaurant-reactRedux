import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { resturantsReducer, sortReducer } from './restaurants-reducer';

export const init = () => {

    const reducer = combineReducers({
        resturants: resturantsReducer,
        sort:sortReducer
    });

    const store = createStore(reducer, applyMiddleware(thunk));
    return store;
}