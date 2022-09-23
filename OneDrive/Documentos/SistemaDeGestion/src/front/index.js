import { render } from "react-dom";
import React from "react";
import  ReactDOM  from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import App from '../../App'
import reportWebVitals from './reportWebVitals';


// const App = () =>{
//     return <h1>hola</h1>
// }
// render(
//     <App/>,
//     document.getElementById('app')
// )
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,

)

reportWebVitals()