import React,{Component} from 'react'
import store from '../../store/index.js'
import './index.scss'
import axios from 'axios'

class Input extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	content:''
	  };
	}
	render(){
		return <div id="all">
				<div className="header">
					
						<div className="up">
								<i className="iconfont icon-sousuo"></i>
						</div>
						<div className="center">
							<input type="text" style={{border:'none',
										width:'243px',height:'32px',background:'#eee'}} placeholder={this.state.content} defaultValue={this.state.content}/>
						</div>
						
					<div onClick={this.click.bind(this)} className="down">取消</div>
				</div>
				<h3 >
					搜索发现 
				</h3>
				<div className="list">
					<ul>
						<li>羽绒服</li>
						<li>包袋</li>
						<li>靴子</li>
					</ul>
					<ul>
						<li>GUCCI</li>
						<li>彩妆</li>
						<li>厨房</li>
					</ul>
				</div>
				<h3 className="history">
					搜索历史	<i className="iconfont icon-lajitong"></i>
				</h3>

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
	componentDidMount(){
		axios('http://www.mei.com/appapi/search/searchDefault/v3').then(res=>{
  		this.setState({
  			content:res.data.words
  		})
  	})
	}

} 
export default Input;