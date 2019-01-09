import React, { Component } from 'react';
import Header from './components/header'
import store from './store'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	content:'',
      isShow:true
    }
  }
  render() {
    return (
      <div >
            {this.props.isShow?<Header chuandi={this.props}></Header>:null}
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
  (state)=>{
      return {
        isShow:state.headerReducer
      }
    },
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
