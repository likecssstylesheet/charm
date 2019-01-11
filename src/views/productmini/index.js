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
	  	datalist:[],
	  	up:true,
	  	id:''
	  };
	}
	componentWillUnmount(){
		this.props.showheader()
	}
	componentDidMount(){
		this.props.hideheader()

		axios(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1547118699128&summary=685b86a502e7a72a1be3f06c6c8ad543&platform_code=H5`)
		.then(res=>{
			console.log(res.data.products);
			this.setState({
					content:res.data,
					datalist:res.data.products,
					id:this.props.match.params.id
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
						<div onClick={this.prize.bind(this)} className={this.state.light==3? 'light':null} id={this.state.up?'propirze':'propirze11'}>价格</div>
						<div onClick={this.filter.bind(this)}>筛选</div>
						
					</div>
					<div className="productsAll">
						<div className="smalltitle">
							{
							this.state.content.couponScheme.eventCoupon==0?
								null
								:
								<div>
								<div className="titletop">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAcCAYAAAA0u3w+AAAABGdBTUEAALGPC/xhBQAAByxJREFUWAntV31sU1UUf/e13ZeMD4GIwFi7iWnXbozNbBmSCTNEEAcEQTRAQhAURRKifxBjkBFFJcQoiR9BopKBH0MTTYh8GcmcRBgwtrB1rcDajoVtKEO22a7t63vX33nb294K3Qr/jXCT13vOueeee8/3LWuyWrlwL497WUHSTbyXnUe63VdQ8zDPzzdpcPTcbLXme+32XD3da7U+0WKzTdfT7hb22GzFHru94G72x+VBn9W61BMIOH05OZbbHSILwg5FUd7WrymMlUucr9HTNLjFbn+kOSvLruHDzaiCWwRF2UTnQ9nj7Tk5Dwy3R1s3asBQM09KOs+CQVkOh6vglZI0l+tSU1bWdsZ5Hu3jmJkgyDj8UL8czidyxp4DLaeP589Mt/t9gsOyvA/841uKivLSTp3q6d8TA8A5EYGxBPOFC16P1WrqkaT1YP04BvsgclwKWurqfM3Z2bNkSTomCcLv3uzsEkWSgjjUT9IYYzKUlDGruHoCYxxKgF3QaCGVjh/RZFrHJem8dPPmLqCvER0GWwtF5hIcPeDBmUSDsfZjSlQ4fxPw+AyXa2s0bzQel4K0Kb2+/t/W/PynewKBPSmM3ZjU5w1ag1WPQssADnyecBpNNlszLvxThtv9Vi9l4NdSX+/2ZGVR2O32ZmXttzQ2VjNFKYSMeeA6O8DZC8FQCqBUfGPxdcCQHVB6VO/q0L+MegVCBzJiD29u7ljzkiVdrKyMDhL48uWGNo9nnLYjEgqNQThyU0JCl0aTwuHRBsbC8FZQo02uqbmuwbysTPRUVJyFEWQYoQBG2gMFJ8NIpRqPNsNb7wBeiDU1JTT6cDPpNqwH+YIFiR6f76S3oqIR8Gp25EjI53ZPR4i6og+ISBSRAyNCYDjcS2CMFhN6EYQ1jIXK+Aos+6BGo5mKT4TzdRoN67Xw2FUUsYkajcJ5bGrqj+Orq/sNqq1Fz8MqSAoh3LYgx77x+nzH4c3FxuTkZqmzs1gvjCtKFS6yHl74C3OmIstfGwyGEuSLqid5WM9PcIbTeSaaxkQxWZDldI2Oc1sEUbwEXFUQXnkUof1lZ1fXZdCqNL5Y87AK0sZMl+sXCC7AYb/xUOikIEnFGY2Nf+iFYl0wcF6b7nLVeByOTlpLT0o6yWpqBrtVv+k28LSGhnMgL9Uv+Wy2PLSixI7CwtGd3d2lMGa3JSXllJ4nFhyXgrQZeXoR/WtuRJZXpjmdN9Abi3Aolev+AXwbFL0OD6hh5w0E9gJX89YgCHvNbvctl/I5HDZzQ0N/uFOvU8LhzzWhXBSrFVH8TIhEBL/fPxE9aREi5ES8hour0WuHQbHLFrd7O+E4NBPhuAqHpWAe08djUnFB0Bpxct/6KpVfE9Q3o3gUy5FII9qOFTKSQe5BrqUCLkRYHsB8BUUoz7Js2T+AJTwccqHg45B5NEpUTPSOFESbSMGlqmH1WapEztXWAO/sIBw5967aKhj7AsVBRhitUnHwxbjBi6DXU9vATHnnw0ejBylwAIqoHqeCBEU9yL3NUDQoGgwVvWzD/96RgkG/fyUqRR5Kv08vGqFZCPy6rCifqM8oznNQVBSE6FY9nx6mfAK+DEWlnOiQa8bn1fNEwefgvdmg7aOeHLUWE70jBSFlI75D02prW/USYd1F8Nh3uOCxgCRtwxo9vD/FV0oPcT2vBnd1d7+ACyeKqM70kIeMKaIoerT1W2bGqFlzkyDspjVqX7fw3IYQt4JNdvtsKDADl9ijl+ND4QF9vtFoLBcTEz9A7pwB/hQq6kFcaCdy7zE9vwajIq8F/KvZ5Wrz+P0W7DGgtXjVdc4fQiq0Ih8/Irxlxowp4N+EqJDDKSl/Ew29uR7VWn3nEh5rxK0g4n8jLuxFxTuuF4ZLvYq8+J7KO96sN1FBV4PPiXZx2rxixUGz0/mFnp/gKzabAxcuAF854TDaGkxXMyZN8rAJEy4KRuNMJPR8ZjQWw2Ovh0MhMhblcZsQDC7ELMDjU/G8o8I05IirTaAPPYw8exZW3obExzQwTAbDy+jk6guF/hNyWX4GNy7q4+NCWRm9S1GHBgYaIxWXLuO4cT9TziKsNwDfxSor6VFA3wV8AorahGAg8C1AOwrYLLzol6AHvoHHxmElGExmCQnXiG+oEZeCsPZL8JIAi34VLYx6okazOJ11XofjSUtDwxlcwszD4VLsnYJcGwWlLxIfnzPH6GlvXwkD/EB/lfAGpX8TSUioQZ6+4nBk4mF/AnvxtmeL0p3ORvyjaYtEIht4MFgJ2jX6l0Myhxrxhago1iFEdmY0NPRbTFSUAGjt0cKhXCXREg2G/xDW6wDOA997oKv/EshLaJYlgsm0i/iQu6dhvA+nut0dhGsjjZ5ognA4yWjMQ6upIjpVTzzgFyMXWyFzs8Y75IyXxqCQG5J5hC2SbvF5cIQppr/ufQX11hiJsPqPfiRePN47/w/D4Bo37J8V0gAAAABJRU5ErkJggg=="/>
									<span>{this.state.content.couponScheme.eventCoupon[0].couponContent}</span>
								</div>
							
							
								<div className="downtitel">
									<img src="/images/mianyun.png" alt=""/><span>{this.state.content.couponScheme.otherCoupon[0].couponContent}</span>
								</div>
							</div>
						}	
						</div>
						<ul className="productsList">
							{	this.state.datalist==0?
								null

								:this.state.datalist.map(item=>
									<li key={item.glsCode} onClick={this.jump.bind(this,item.glsCode,this.state.id)}>
										<img src={item.imageUrl}/>
										{
											item.tagListDto.length==0?
											<p></p>
											:
											item.tagListDto.map((value)=><span className="log" style={{color:`#${value.fontColor}`,border:`1px solid #${value.frameColor}`,backgroundColor:`#${value.fontBackgroudColor}`}} key={value.tag}>
											{value.tag}</span>)
										}
										<p className="big">{item.brandName}</p>
										<p>{item.productName}</p>
										<p><span className="nowprize">{item.price}</span><span className="delate">{item.marketPrice}</span><span className="zhekou">{item.discount}折</span></p>
									</li>
								)
							}

						</ul>
					</div>
				</div>

			:null}
		</div>
	}
	componentWillMount(){
		
	}
	goback(){
		
		this.props.history.go(-1)
	}
	person(){
		axios(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1547118699128&summary=685b86a502e7a72a1be3f06c6c8ad543&platform_code=H5`)
		.then(res=>{
			console.log(res.data.products);
			this.setState({
					content:res.data,
					datalist:res.data.products,
					light:1
			})
		})

		
	}
	discount(){
		axios(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=1&sort=ASC&timestamp=1547118699128&summary=685b86a502e7a72a1be3f06c6c8ad543&platform_code=H5`)
		.then(res=>{
			console.log(res.data.products);
			this.setState({
					content:res.data,
					datalist:res.data.products,
					light:2
			})
		})
		
		
	}
	prize(){

	if(this.state.up){
	axios(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=DESC&timestamp=1547118699128&summary=685b86a502e7a72a1be3f06c6c8ad543&platform_code=H5`)
	.then(res=>{
		console.log(res.data.products);
		this.setState({
				content:res.data,
				datalist:res.data.products,
				light:3,
				up:!this.state.up
		})
	})
}else{
	axios(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=1&sort=DESC&timestamp=1547118699128&summary=685b86a502e7a72a1be3f06c6c8ad543&platform_code=H5`)
	.then(res=>{
		console.log(res.data.products);
		this.setState({
				content:res.data,
				datalist:res.data.products,
				light:3,
				up:!this.state.up
		})
	})
}
		
			
		
	}
	filter(){

	}
	jump(data1,data2){
		this.props.history.push(`/productdetail/eventCode=${data2}&glsCode=${data1}`)
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

