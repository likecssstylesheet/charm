import React,{Component} from 'react'
import store from '../../store'
import {getWomenLogo} from './model.js'

class Trademark extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	womenlogo:[]
	  };
	}
	render(){
		return <div id="">
			
		</div>
	}
	componentWillUnmount(){
		store.dispatch({
			type:'Hideheader',
			payload:true
		})
	}
	componentDidMount(){
		getWomenLogo().then(res=>{
		return console.log(res)
			// this.setState({
			// })
		})
	}
	componentWillMount(){
		store.dispatch({
			type:'Showheader',
			payload:false
		})
	}
}

export default Trademark
