import {call, put} from "redux-saga-effects";
import {requestGetUser} from "../requests/user.jsx";
import {setUser} from "../../user.jsx";

export function* handleGetUser(action){
    try{
        const response = yield call(requestGetUser)
        const {data} = response
        yield put(setUser(data))

    }catch(e){
        console.log(e)
    }
}