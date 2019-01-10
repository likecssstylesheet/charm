import React,{Component} from 'react'
import axios from 'axios'
import store from '../../store'

function getLogo(){
	axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res.data.body
	})
}
class Logo extends Component {
	render(){
		return <div>
			logo
		</div>
	}
componentWillUnmount(){
	store.dispatch({
		type:'Hideheader',
		payload:true
	})
}
componentDidMount(){
	getLogo().then(res=>
		console.log(res)
		// this.setState({
		// 	content:res
		// })
	)
}
componentWillMount(){
	store.dispatch({
		type:'Showheader',
		payload:false
	})
}
}

export default Logo
