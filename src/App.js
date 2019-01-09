import React, { Component } from 'react';
import Header from './components/header'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	isShow:true
    }
  }
  componentWillMount(){
		store.subscribe(()=>{
			this.setState({
				isShow:store.getState().headerReducer
			})
		})
	}
  render() {
    return (
      <div >
            {this.state.isShow?<Header></Header>:null}
            {this.props.children}
      </div>
    )
  }
}

export default App;
