import logo from './logo.svg';
import './App.css';

function App() {
  console.log('testing debugger')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My REACT_APP_VERSION is {process.env.REACT_APP_VERSION}</p>
        <p>My MY_FOO does not work, as it is called incorrectly {process.env.MY_FOO}</p>
        <p>My NODE_ENV is {process.env.NODE_ENV}</p>
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/adding-custom-environment-variables/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Env Vars in React
        </a>
      </header>
    </div>
  );
}

export default App;
