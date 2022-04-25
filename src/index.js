/*
//ANTES
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./components/CounterApp.js"
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp  value={ 123 } />, divRoot);
*/
import { createRoot } from "react-dom/client";
import CounterApp from "./components/CounterApp.js"
import './index.css';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot)

root.render(<CounterApp  value={ 123 } />);


