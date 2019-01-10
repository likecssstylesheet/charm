import React,{Component} from 'react'

class Info extends Component{
	render(){
		return <div className="info">
			 		 <h2>距离开场还剩<span>04</span>小时</h2>
			 		 <span>{this.props.data}</span>	
			   </div>
	}
}
export default Info