import React from 'react';

class CounterNoHooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Count is at {this.state.count}.</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </div>
    );
  }
}

export default CounterNoHooks;
