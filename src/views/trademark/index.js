import React,{Component} from 'react'
import store from '../../store'
import {getWomenLogo} from './model.js'
import './index.scss'

class Trademark extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	womenlogo:[]
	  };
	}
	render(){
		return <div id="trademark">
			<header>
				<a href="/#/index" className="left"><span class="iconfont">&#xe61e;</span></a>
				<span className="center">品牌活动</span>
				<a className="right">
					<span className="iconfont">&#xe678;</span>
					<span className="three"></span>
				</a>
				<ul>
					<li><a href="#">首页</a></li>
					<li><a href="#">购物袋</a></li>
					<li><a href="#">个人中心</a></li>
				</ul>
			</header>
		</div>
	}
	componentWillUnmount(){
		store.dispatch({
			type:'Hideheader',
			payload:true
		})
	}
	componentDidMount(){
		getWomenLogo().then(res=>{
		return console.log(res)
			// this.setState({
			// })
		})
	}
	componentWillMount(){
		store.dispatch({
			type:'Showheader',
			payload:false
		})
	}
}

export default Trademark
