import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
import Head from './head'
import store from '../../store'

class Produce extends Component{

	render(){
		return (
			<div id="detail">
				<Head></Head>
			</div>
			)
	}

	componentWillMount(){
		store.dispatch({
			type:"Hideheader", 
			payload:false  
		})
		// this.props.hide();
	}

	componentWillUnmount(){
		store.dispatch({
			type:"Showheader", 
			payload:true  
		})
		// this.props.show();
	}
	componentDidMount(){
		axios({
			url:`http://www.mei.com/appapi/product/getAppProductDetailUrl/v3?${this.props.match.params.data}`
					
			}).then((res)=>{
				// console.log(res.data)
				axios({
					url:`http://www.mei.com/appapi/product/getProductPrice/v3?productId=${res.data.productId}&userLevel=2&type=0`
				}).then(res=>{
					console.log(res.data)
				})

				axios({
					url:`http://www.mei.com/appapi/product/detail/v3?categoryId=${res.data.eventId}&productId=${res.data.productId}&platform_code=H5&timestamp=${time()}&summary=ec7fd7ec49470eae3632aa3b865a4eee`
				}).then(res=>{
					console.log(res.data)
				})
			})
	}
}

function time(){
	var date = new Date();
	return date.getTime();
}

export default Produce