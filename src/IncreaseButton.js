import React from 'react';

class IncreaseButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleIncrease}>
        Increase to {this.props.currentNumber + 1}
      </button>
    );
  }
}

export default IncreaseButton;
