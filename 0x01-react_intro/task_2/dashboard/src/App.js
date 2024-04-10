import holberton_logo from "./holberton_logo.jpg";
import {getFullYear, getFooterCopy} from './utils'
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <img src={holberton_logo} alt=""></img>
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
          <label htmlFor="password">Password</label>
          <input type="text" id="password"></input>
          <button>OK</button>
        </div>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()} </p>
        </div>
      </div>
    </>
  );
}

export default App;
