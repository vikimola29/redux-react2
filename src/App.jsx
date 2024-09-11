import {useEffect} from 'react'
import './App.css'
import Counter from "./components/Counter.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/user.jsx";

function App() {

    const votersArray = ["Cecil", "Carlos", "Jonathan Sims", "Gerry"]
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const user = useSelector((state) => state.user.user)
    console.log(user)


    return (
        <>
        { user && <h1>Hello {user.firstName} {user.lastName}!</h1>}
            <h1>Total votes: {count}</h1>
            <div className="card">
                {votersArray.map((name) => <Counter name={name} key={name}/>)}
            </div>
        </>
    )
}

export default App
