import React,{Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import './index.scss'
import {connect} from 'react-redux'
import axios from 'axios'

class Header extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	content:''
	  };
	}

	componentDidMount(){
		axios('http://www.mei.com/appapi/search/searchDefault/v3').then(res=>{
  		this.setState({
  			content:res.data.words
  		})
  	})
	}
	render(){
		return <div className="allheader" style={this.props.isWhite?{background:'white',color:'black'}:null}>
				<ul className="head">
					<li className="first"><span>登录</span></li>
					<li className="two"><div onClick={this.handle.bind(this)}><i className="iconfont icon-sousuo"> </i><a>{this.state.content}</a></div></li>
					<li className="last"><i className="iconfont icon-baozhuanhuan"></i></li>
				</ul>
				<div className="alltab">

				<ul className="tabbar"  >
					<li >
						<NavLink to="/index" replace activeClassName="active"  style={this.props.isWhite?{background:'white',color:'black'}:null}>推荐</NavLink>
					</li>
					<li>
						<NavLink to="/crossborder" replace activeClassName="active"  style={this.props.isWhite?{background:'white',color:'black'}:null}>海外</NavLink>
					</li>
					<li>
						<NavLink to="/women" replace activeClassName="active"  style={this.props.isWhite?{background:'white',color:'black'}:null}>女士</NavLink>
					</li>
					<li>
						<NavLink to="/men" replace activeClassName="active" style={this.props.isWhite?{background:'white',color:'black'}:null}>男生</NavLink>
					</li>
					<li>
						<NavLink to="/cosmetics" replace activeClassName="active"  style={this.props.isWhite?{background:'white',color:'black'}:null}>美妆</NavLink>
					</li>
					<li>
						<NavLink to="lifestyle" replace activeClassName="active"  style={this.props.isWhite?{background:'white',color:'black'}:null}>家居</NavLink>
					</li>
					<li>
						<NavLink to="/kids" replace activeClassName="active"  style={this.props.isWhite?{background:'white',color:'black'}:null}>婴童</NavLink>
					</li>
					<li>
						<NavLink to="/upcoming" replace activeClassName="active"  style={this.props.isWhite?{background:'white',color:'black'}:null}>即将上线</NavLink>
					</li>
				</ul>
		</div>
	</div>	
	}
	handle(){
		this.props.chuandi.history.push('/input')
	}
}

export default connect((state)=>{
	return {isWhite:state.whiteReducer}
})(Header)