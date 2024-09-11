import {takeLatest} from "redux-saga-effects";
import {handleGetUser} from "./handlers/user.jsx";
import {GET_USER} from "../user.jsx";
export function* watcherSaga(){
    yield takeLatest(GET_USER, handleGetUser)

}