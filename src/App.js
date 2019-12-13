import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Enzyme 101
          </h1>

          <p>
            Let's learn about Enyzme.
          </p>

          <p>
            Follow the link below to find out more.
          </p>

          <a
            className="link"
            href="https://airbnb.io/enzyme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Enzyme
          </a>
        </header>
      </div>
    );
  }
}

export default App;
