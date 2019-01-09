import React,{Component} from 'react'
import './index.scss'
import store from '../../store'
import {getConnent} from './model.js'

class Gift extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	content:{}
	  };
	}
	render(){
		return <div id="gift">
			<img src="http://cdn13.mei.com/category/20180601/816c4a87ab4a9ecc4440b206ef0f40ca25aecd78fee7fcaf.jpg" alt="图片正在努力加载中"/>
			<div className="pledge"></div>
			<div className="content">
				<span className="left">
					<span>￥</span>
					{this.state.content.amount}
				</span>
				<div className="right">
					<span className="one">NEW</span>
					<span className="two">{this.state.content.des1}</span>
					<span className="three">{this.state.content.des2}</span>
					<span className="time">{this.state.content.beginTime}-{this.state.content.endTime}</span>
				</div>
				<div className="acquire"><p>领取优惠券</p></div>
			</div>
		</div>
	}

componentWillUnmount(){
	store.dispatch({
		type:'Hideheader',
		payload:true
	})
}
componentDidMount(){
	getConnent().then(res=>
		// console.log(res)
		this.setState({
			content:res
		})
	)
}
componentWillMount(){
	store.dispatch({
		type:'Showheader',
		payload:false
	})
}

}
export default Gift

