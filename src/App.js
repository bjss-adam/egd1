import React from 'react';
import IncreaseButton from './IncreaseButton';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { number: 1 };
  }

  increaseNumberInState = () => {
    this.setState((currentState) => ({ number: currentState.number + 1 }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Current number is: {this.state.number}
          </p>

          <IncreaseButton
            currentNumber={this.state.number}
            handleIncrease={this.increaseNumberInState}
          />
        </header>
      </div>
    );
  }
}

export default App;
