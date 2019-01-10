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
			<div className="back">
				<span className="iconfont icon-xiazai6"></span>	
			</div>
			<div className="data">
				{this.props.children}
			</div>
			<div className="menu" onClick={this.changeMenu.bind(this)}>
			    <span className="iconfont icon-caidan"></span>
			    {this.state.isShow? <ul>
			    	<li><a>首页</a></li>
			    	<li><a>购物袋</a></li>
			    	<li><a>个人中心</a></li>
			    </ul>:null}
			</div>

			
		</div>

	}
	changeMenu(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default Head