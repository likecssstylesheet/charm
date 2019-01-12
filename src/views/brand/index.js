import React,{Component} from 'react'
import {getBrandInfo,getGoodthing} from './model.js'
import {connect} from 'react-redux'
import store from '../../store'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import './index.scss'
class Brand extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			brandinfo: null,
			status: true,
			gooddata: [],
			hotlist: [],
			number: '',
			productlist:[],
			current:1
		}
	}

	componentDidMount() {
		this.props.hide()
		getBrandInfo(this.props.match.params.id).then(res => {
			this.setState({
				data: res.newProductTop10,
				hotlist: res.hotProductTop10,
				brandinfo: res,
				number: this.props.match.params.id
			})
		})

		getGoodthing(this.props.match.params.id).then(res => {
			this.setState({
				gooddata: res.categories,
				productlist: res.categoryProducts,

			})
			// console.log(res.categoryProducts)
		})
	}
	componentWillUnmount() {
		this.props.show()
	}

	render() {
		return <div id="brand_more" >
		{
				this.state.brandinfo?
				<div>
					<div className="brandImg">
						<img src={this.state.brandinfo.brandDetail.brandPageImage}/>
						<h1>{this.state.brandinfo.brandDetail.brandName}</h1>
						<span><NavLink to="">+ 关注</NavLink></span>
					</div>
					<div className="brandban">
						再售商品<em>{this.state.brandinfo.onSaleTotal}</em>件&nbsp;
						上新<em>{this.state.brandinfo.newTotal}</em>件
					</div>
					<div className="branddes">
						<p className={this.state.status?"hide":"show"}>
							{
								this.state.brandinfo.brandDetail.brandStoryText
							}
						</p>
						<span onClick={this.handleClick.bind(this)}>{this.state.status?"更多":"收起"}</span>
					</div>
					<div className="newup">
						<h2></h2>
						<div className="swiper">
						<ul>
							{this.state.data.map((item,index) => {
								return (
									<li  onClick={this.handleDetail.bind(this,item.eventId,item.glsCode)} key={item.productId}>
										<img src={item.fileUrl} alt=""/>
										<span></span>
									<em>￥{item.price}</em>&nbsp;
									<em className="line">￥{item.marketPrice}</em>
									</li>									
									)
								
							})}
						</ul>
						</div>
					</div>

					<div className="hotstyle">
						<h2></h2>
						<div className="swiper">
						<ul>
							{this.state.hotlist.map((item,index) => {
								return (
									<li key={item.productId} onClick={this.handleDetail.bind(this,item.eventId,item.glsCode)}>
										<img src={item.fileUrl} alt=""/>
										<span></span>
									<em>￥{item.price}</em>&nbsp;
									<em className="line">￥{item.marketPrice}</em>
									</li>									
									)
								
							})}
						</ul>
						</div>
					</div>
				</div>
				:null			
		}

		
		<div className="goodthing">
			<h2></h2>
		</div>
		{
			this.state.gooddata.length !==0?
			<div >
				<ul className="myheader">
					{
						this.state.gooddata.map((item,index) => {
							return (
								<li key={item.categoryId} onClick={this.handleClickmen.bind(this,item.categoryId)}><span onClick={this.handleChange.bind(this,index)} className={this.state.current == index? 'active': ''}>{item.categoryName}</span></li>
								)
						})
					}
				</ul>
				<ul className="first">
				{
					this.state.productlist.map((item,index) => {
						return (
							<li key={item.productId} onClick={this.handleDetail.bind(this,item.eventId,item.glsCode)}>
								<img src={item.fileUrl}/>
							<div className="detail">
								<div>{item.tagListDto.length!==0?item.tagListDto.map(item => <span key={item.tag}>{item.tag}</span>):''}</div>
								<div><em>{item.brandName}</em></div>
								<div><em>{item.productName}</em></div>
								<div className="last">
								<span>￥{item.price}</span>
								<span>￥{item.marketPrice}</span>
								<span>{item.discount}折</span>
								</div>
							</div>
							</li>
							)
					})
				}
				</ul>
			</div>
			:null				
		}	
		</div>
	}

	handleClick() {
		this.setState({
			status: !this.state.status
		})
	}
	handleChange(index) {
		this.setState({
			current: index
		})
	}
	handleDetail(eventCode,glsCode) {
		this.props.history.push(`/productdetail/eventCode=${eventCode}&glsCode=${glsCode}`)
	}
	handleClickmen(number) {
		this.props.history.push(`/brand/${this.state.number}?categoryId=${number}`)
		axios({
		url: `http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=${this.props.match.params.id}&pageIndex=1&categoryId=${number}`
		
	}).then(res => {
		this.setState({
			gooddata: res.data.body.categories,
			productlist: res.data.body.categoryProducts
		})
	})
	}
}
export default connect(
	null,
	{
		show() {
			return {
				type: 'Showheader',
				payload: true
			}
		},

		hide() {
			return {
				type: 'Hideheader',
				payload: false
			}
		}
	}
	)(Brand)
