import React,{Component} from 'react'
import {connect} from 'react-redux'
import './index.scss'
import axios from 'axios'

class Preductmini extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isshow:false,
	  	content:null,
	  	light:1,
	  	datalist:[]
	  };
	}
	componentWillUnmount(){
		this.props.showheader()
	}
	componentDidMount(){

		axios(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1547118699128&summary=685b86a502e7a72a1be3f06c6c8ad543&platform_code=H5`)
		.then(res=>{
			console.log(res.data.products);
			this.setState({
					content:res.data,
					datalist:res.data.products
			})
		})
	}
	render(){
		return <div id="preductMin">
				{ this.state.content?
				<div>
					<ul className="header">
						<li className="ic" onClick={this.goback.bind(this)}><i className="iconfont icon-fanhuijiantou parent"></i></li>
						<li className="title contents"><span>{this.state.content.eventName}</span></li>
						<li className="ic " onClick={()=>{this.setState({
							isshow:!this.state.isshow
						})}}><i className="iconfont icon-gengduo"></i></li>	
					</ul>
					{ this.state.isshow?
					<ul className="navlist">
						<li className="sanjiao"></li>
						<li className="nav"><p>首页</p></li>
						<li className="nav"><p>购物袋</p></li>
						<li className="nav"><p style={{border:'none'}}>个人中心</p></li>
					</ul>
					:null
					}
					<div className="classify">
						<div onClick={this.person.bind(this)} className={this.state.light==1? 'light':null}>人气</div>
						<div onClick={this.discount.bind(this)} className={this.state.light==2? 'light':null}>折扣</div>
						<div onClick={this.prize.bind(this)} className={this.state.light==3? 'light':null}>价格</div>
						<div onClick={this.filter.bind(this)}>筛选</div>
						
					</div>
					<div className="smalltitle">
						<img src="/images/mianyun.png"/><span>{this.state.content.promotions.info.slice(0,-1)}</span>
					</div>
					<ul>
						{	this.state.datalist==0?
							null

							:this.state.datalist.map(item=>
								<li key={item.glsCode}>
									<img src={item.imageUrl}/>
									
									<p>{item.brandName}</p>
									<p>{item.productName}</p>
									<p><span>{item.price}</span><span>{item.marketPrice}</span></p>
								</li>
							)
						}

					</ul>
				</div>

			:null}
		</div>
	}
	componentWillMount(){
		this.props.hideheader()
	}
	goback(){
		
		this.props.history.go(-1)
	}
	person(){
		this.setState({
			light:1
		})
	}
	discount(){
		this.setState({
			light:2
		})
	}
	prize(){
		this.setState({
			light:3
		})
	}
	filter(){

	}

}
export default connect(null,{

	hideheader(){
		return {
			type:'Hideheader',
			payload:false
		}
	},
	showheader(){
		return{
			type:"Showheader",
			payload:true
		}
	}

})(Preductmini)