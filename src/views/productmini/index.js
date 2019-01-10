import React,{Component} from 'react'
import {connect} from 'react-redux'

class Preductmini extends Component{
	render(){
		return <div id="preductMin">
				<ul className="header">
					<li className="ic"><i className="iconfont icon-jiang-copy"></i></li>
					<li></li>
					<li className="ic"><i className="iconfont icon-gengduo"></i></li>
				</ul>
				<div></div>
		</div>
	}
	componentWillMount(){
		this.props.hideheader()
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