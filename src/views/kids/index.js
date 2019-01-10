import React,{Component} from 'react'
import axios from 'axios'

class Produce extends Component{

	constructor(props) {
	    super(props);
	
	    this.state = {
	    	productData:null,
	    	productPrice:null,
	    	recommend:null
	  };
	}

	render(){
		return (
			<div id="detail">
				
			</div>
			)
	}

	componentWillMount(){
		
		this.props.hide();
	}

	componentWillUnmount(){
		
		this.props.show();
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
					// console.log(res.data)
					this.setState({
						productData:res.data
					})
				})

				axios({
					url:`http://www.mei.com/appapi/product/hot/v3?categoryId=${res.data.eventId}&productId=${res.data.productId}&platform_code=H5`
				}).then(res=>{
					console.log(res.data)
					this.setState({
						recommend:res.data
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