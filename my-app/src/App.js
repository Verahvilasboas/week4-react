import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          check my
        </a>
        <a className="btn btn-primary" href="#" role="button">
          Link
        </a>
        <footer className="footer">
          This project was coded by Vera and is 
          <a
            href="https://github.com/andie7/New-React-weather-app"
            target="_blank"
          >
            open sourced on Github
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
