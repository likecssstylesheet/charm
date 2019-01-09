import React, { Component } from 'react';
import Header from './components/header'
import store from './store'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 

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
  componentDidMount(){
  	window.onscroll=this.scroll.bind(this);
  	
  }
  scroll(){
  	
  		if(document.documentElement.scrollTop>0){
  			this.props.changewhite()
  		}
  		else{
  			this.props.changeopacity()
  		}
  }
}

export default withRouter(connect(
  null,
  {
  changewhite(){
      return {
        type:'white',
        payload:true
      }
    },
  changeopacity(){
      return {
        type:'noWhite',
        payload:false
      }
    }
  }
)(App))
