import React,{Component} from 'react'
import './index.scss'

class Head extends Component{
	constructor(props) {
	    super(props);
	
	    this.state = {
	    	isShow:false
	  };
	}
	render(){
		return <div id="headPendulum">
			<div className="back" onClick={this.back.bind(this)}>
				<span className="iconfont icon-xiazai6"></span>	
			</div>
			<div className="data">
				{this.props.children}
			</div>
			<div className="menu" onClick={this.changeMenu.bind(this)}>
			    <span className="iconfont icon-caidan"></span>
			    {this.state.isShow? <ul>
			    	<li><a href="#/index">首页</a></li>
			    	<li><a href="#/index">购物袋</a></li>
			    	<li><a href="#/index">个人中心</a></li>
			    </ul>:null}
			</div>

			
		</div>

	}
	changeMenu(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	back(){
		this.props.history.go(-1)
		
	}
}

export default Head