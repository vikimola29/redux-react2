import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./redux/configureStore.jsx"

createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <Provider store={store}> {/*holds the whole state tree of your application. */}
            <App/>
        </Provider>
    // </StrictMode>
)
