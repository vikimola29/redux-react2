import React from 'react';
import {useDispatch} from "react-redux";
import {decrement, increment} from "../redux/counter.jsx";

export default function Counter({name}) {

    const [votes, setVotes] = React.useState(0)

    const dispatch = useDispatch()


    function handleIncrement() {
        dispatch(increment())
        console.log("increment")
        setVotes((prevVotes) => prevVotes + 1)
    }

    function handleDecrement() {
        dispatch(decrement())
        setVotes((prevVotes) => prevVotes - 1)
    }

    return (
        <div>
            {votes <= 1 && <h3>{name}: {votes} vote</h3>}
            {votes > 1 && <h3>{name}: {votes} votes</h3>}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

        </div>
    )
}