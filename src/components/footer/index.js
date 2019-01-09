import React,{Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'

class Footer extends Component{
	render(){
		return <div id="Footer">
			<p>400&nbsp;-&nbsp;664&nbsp;-&nbsp;6698</p>
			<ul>
				<li>
					<NavLink to="/index" replace>首页</NavLink>
				</li>
				<li>
				<a href="https://itunes.apple.com/cn/app/id510289916?spm=a2o1p.9077418.0.0.4bf24cablvx1Mv">客户端</a>
				</li>
				<li>登录</li>
				<li className="last">注册</li>
			</ul>
			<span>浙ICP备16004860号-1</span>
		</div>
	}
}

export default Footer
