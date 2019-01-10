import React,{Component} from 'react'

class Nav extends Component{

	render(){
		return <div id="nav">
			<div class="left">
				<p>购物袋</p>
			</div>
			<div>
				<span class="car">加入购物车</span>
				<span>立即购买</span>
			</div>
		</div>
	}
}

export default Nav

