import React, { Component } from 'react';
import Header from './components/header'


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
