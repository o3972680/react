
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import counterReducer from './counter_reducer';
import postReducer from './post_reducer';

const rootReduces = combineReducers({
    counter: counterReducer,
    post: postReducer,
});

export default rootReduces;