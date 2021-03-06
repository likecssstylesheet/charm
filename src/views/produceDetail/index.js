import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
import Head from './head'
import store from '../../store'
import Swipe from './swipe'
import Des from './Des'
import {connect} from 'react-redux'
import Parameter from './parameter'
import ProductPic from './productpic'
import StopWord from './stopWord'
import Brand from './brand'
import Comment from './comment'
import Recommend from './recommend'
import Nav from './nav'
// import Popup from './popup'

class Produce extends Component{

	constructor(props) {
	    super(props);
	
	    this.state = {
	    	productData:null,
	    	productPrice:null,
	    	recommend:null,
	    	productId:null,
	    	modalShow:true
	  };
	}

	render(){
		return (
			<div id="detail">
				{this.state.productData&&this.state.productPrice?
					<div>
					<Head {...this.props}>
						<span className="productName">{this.state.productData.infos.brand}</span>
						<span className="productPrice">￥{this.state.productPrice.retDto.price}</span>
				</Head>
				<div className="cont">
					<div className="swipe">
						<Swipe data={this.state.productData.infos.images}></Swipe>
					</div>
					<div className="des">
						<Des data={this.state.productData.infos}></Des>
					</div>
					<Parameter data={this.state.productData.infos.description.attributesList}/>
					<ProductPic data={this.state.productData.infos.description}/>
					<Brand data={this.state.productData.infos}/>
					<StopWord data={this.state.productData.infos.postSellUrls}/>
					<Comment />
					{this.state.recommend.categoryList.length>0?<Recommend data={this.state.recommend.categoryList} restart={getData.bind(this)} {...this.props}/>:null}
					<Nav />
				</div>
				</div>
				:null
				}
				
			</div>
			)
	}
	restart(id){
		this.setState({
			productId:id
		})
	}

    componentWillReceiveProps(){

    }
	

	componentWillMount(){
		
		
	}

	componentWillUnmount(){
		
		this.props.show();
	}
	componentDidMount(){
		this.props.hide();
		getData.bind(this)()
	}
}
function getData(){
	this.setState({
		productData:null,
		productPrice:null,
		recommend:null,
		productId:null
	})
	axios({
			url:`http://www.mei.com/appapi/product/getAppProductDetailUrl/v3?${this.props.match.params.data}`
					
			}).then((res)=>{
				// console.log(res.data)
				this.setState({
					productId:res.data.productId
				})
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
					// console.log(res.data)
					this.setState({
						recommend:res.data
					})
				})
			})
		}
		
		function time(){
			var date = new Date();
			return date.getTime();
		}

export default connect(
  null,
  {
  hide(){
      return {
        type:"Hideheader", 
		payload:false  
      }
    },
  show(){
      return {
        type:"Showheader", 
		payload:true 
      }
    }
  }
)(Produce)