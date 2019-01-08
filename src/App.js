import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div >
            <Header></Header>
            {this.props.childeren}
      </div>
    );
  }
}

export default App;
