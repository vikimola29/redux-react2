
 // action == an event that describes something that happened in the application.
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

const initialState = {count: 0}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}