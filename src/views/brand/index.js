import React,{Component} from 'react'
import {getBrandInfo} from './model.js'
import {connect} from 'react-redux'
import store from '../../store'
import axios from 'axios'
import {} from 'antd-mobile'
import {NavLink} from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss'
class Brand extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ['1', '2', '3'],
			imgHeight: 176,
			brandinfo: null,
			status: true
		}
	}

	componentDidMount() {
		this.props.hide()
		getBrandInfo(this.props.match.params.id).then(res => {
			// console.log(res)
			this.setState({
				data: res.newProductTop10
,
				brandinfo: res
			})
		})
	}
	componentWillUnmount() {
		this.props.show()
	}

	render() {
		return <div id="brand_more">
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

						</div>
					</div>
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
