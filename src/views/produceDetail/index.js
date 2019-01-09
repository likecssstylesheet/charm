import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
import Head from './head'
import store from '../../store'
import Swipe from './swipe'

class Produce extends Component{

	constructor(props) {
	    super(props);
	
	    this.state = {
	    	productData:null,
	    	productPrice:null
	  };
	}

	render(){
		return (
			<div id="detail">
				{this.state.productData&&this.state.productPrice?
					<div>
					<Head>
						<span>{this.state.productData.infos.brand}</span>
						<span>{this.state.productPrice.retDto.price}</span>
				</Head>
				<div className="cont">
					 <Swipe data={this.state.productData.infos.images}></Swipe>
				</div>
				</div>
				:null
				}
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
					// console.log(res.data)
					this.setState({
						productPrice:res.data
					})
				})

				axios({
					url:`http://www.mei.com/appapi/product/detail/v3?categoryId=${res.data.eventId}&productId=${res.data.productId}&platform_code=H5&timestamp=${time()}&summary=ec7fd7ec49470eae3632aa3b865a4eee`
				}).then(res=>{
					console.log(res.data)
					this.setState({
						productData:res.data
					})
				})
			})
	}
}


function time(){
	var date = new Date();
	return date.getTime();
}

export default Produce