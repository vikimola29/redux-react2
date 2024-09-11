import {applyMiddleware, combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import counterReducer from "./counter.jsx";
import userReducer from "./user.jsx";
import createSagaMiddleware from "redux-saga"
import {watcherSaga} from "./sagas/rootSaga.jsx";

const reducer = combineReducers({counter: counterReducer, user: userReducer});

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watcherSaga)
