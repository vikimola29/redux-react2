export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


export const getUser = () => ({
    type: GET_USER
})
export const setUser = (user) => ({
    type: SET_USER,
    user:user
})

const initialState = {user: null}

export default (state=initialState, action)=>{
    switch (action.type){
        case SET_USER:
            const user = action.user
            return {...state, user: user}
        default:
            return state
    }
}

