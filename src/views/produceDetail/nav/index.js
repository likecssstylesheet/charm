import React,{Component} from 'react'

class Nav extends Component{

	render(){
		return <div id="nav">
			<div className="left">
				<p>购物袋</p>
			</div>
			<div className="right">
				<span className="car">加入购物车</span>
				<span className="buy">立即购买</span>
			</div>
		</div>
	}
}

export default Nav

