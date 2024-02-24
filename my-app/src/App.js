import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather app </h1>
        <form>
          <input
            type="search"
            placeholder="enter a city"
            className="form-control"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <p>Lisbon</p>
        <ul>
          <li>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/3721/3721962.png"
            ></img>{" "}
            today 23°c
          </li>
        </ul>

        <ul>
          <li>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/3721/3721962.png"
            ></img>{" "}
            su 23°c
          </li>
        </ul>
        <ul>
          <li>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/3721/3721962.png"
            ></img>{" "}
            mo 23°c
          </li>
        </ul>
        <ul>
          <li>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/3721/3721962.png"
            ></img>{" "}
            tu 23°c
          </li>
        </ul>

        <footer className="footer">
          This project was coded by Vera and is
          <a
            href="https://github.com/Verahvilasboas/week4-react"
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
