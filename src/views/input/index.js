import React,{Component} from 'react'
import store from '../../store/index.js'
import './index.scss'

class Input extends Component{
	render(){
		return <div>
				<div className="header">
					
						<div className="up">
								<i className="iconfont icon-sousuo"></i>
						</div>
						<div className="center">
							<input type="text" style={{border:'none',
										width:'243px',height:'32px',background:'#eee'}} placeholder="111111" />
						</div>
						
					<div onClick={this.click.bind(this)} className="down">取消</div>
				</div>
				<h3 className="history">
					搜索历史 <i></i>
				</h3>
				<div>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
		</div>
	}
	click(){
		this.props.history.go(-1)
	}
	componentWillMount(){
		store.dispatch({
			type:"Hideheader", 
			payload:false  
		})
	
	}

	componentWillUnmount(){
		store.dispatch({
			type:"Showheader", 
			payload:true  
		})
		
	}
} 
export default Input;