import holberton_logo from "./holberton_logo.jpg";
import {getFullYear, getFooterCopy} from './utils'
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <img src={holberton_logo} alt="" style={{width: 200, height: 300}}></img>
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()} </p>
        </div>
      </div>
    </>
  );
}

export default App;
