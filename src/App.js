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
    	isShow:true,
    	content:''
    }
  }
  render() {
    return (
      <div >
          <Header chuandi={this.props}></Header>
          {this.props.children}
      </div>
    )
  }
  
  componentDidMount(){  
  	window.onscroll=this.scroll.bind(this);	
  }
  scroll(){
  	
<<<<<<< HEAD
  	
  		if(document.documentElement.scrollTop>0){
=======
  		if(document.documentElement.scrollTop>0||window.location.href.slice(-8)==='upcoming'){
>>>>>>> 09364c0eafb2b570cbd1304c6a5842849a4a86cf
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
