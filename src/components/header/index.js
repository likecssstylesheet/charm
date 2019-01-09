import React,{Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import './index.scss'

class Header extends Component{
	render(){
		return <div className="allheader">
				<ul className="head">
					<li className="first"><span>登录</span></li>
					<li className="two"><div><i className="iconfont icon-sousuo"> </i><span>RED VALENTINO 全场1折起</span></div></li>
					<li className="last"><i className="iconfont icon-baozhuanhuan"></i></li>
				</ul>
				<div className="alltab">

				<ul className="tabbar">
					<li >
						<NavLink to="/index" replace activeClassName="active">推荐</NavLink>
					</li>
					<li>
						<NavLink to="/crossborder" replace activeClassName="active">海外</NavLink>
					</li>
					<li>
						<NavLink to="/women" replace activeClassName="active">女士</NavLink>
					</li>
					<li>
						<NavLink to="/men" replace activeClassName="active">男生</NavLink>
					</li>
					<li>
						<NavLink to="/cosmetics" replace activeClassName="active">美妆</NavLink>
					</li>
					<li>
						<NavLink to="lifestyle" replace activeClassName="active">家居</NavLink>
					</li>
					<li>
						<NavLink to="/kids" replace activeClassName="active">婴童</NavLink>
					</li>
					<li>
						<NavLink to="/upcoming" replace activeClassName="active">即将上线</NavLink>
					</li>
				</ul>
		</div>
	</div>	
	}
}

export default withRouter(Header)