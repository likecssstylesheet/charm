import React,{Component} from 'react'
import './index.scss'

class Head extends Component{

	render(){
		return <div id="headPendulum">
			<div className="back">
				<span className="iconfont icon-jiantou4"></span>	
			</div>
			<div className="data">
				{this.props.children}
			</div>
			<div className="menu">
			    <span className="iconfont icon-caidan"></span>
			</div>
		</div>

	}
}

export default Head