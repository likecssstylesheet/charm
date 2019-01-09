import {getBanner,getBanner2} from './model.js'
import React,{Component} from 'react'
import './index.scss'

class Index extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	bannerList:[],
	  	bannerList2:{}
	  };
	}

	componentWillMount(){
		getBanner().then(res=>
			this.setState({
				bannerList:res
			})
		);
		getBanner2().then(res=>
			this.setState({
				bannerList2:res
			})
		)	
	}
	render(){
		return <div id="indexf">
		{
			this.state.bannerList.map(item=>{
				return <div key={item.id} className="banner">
					<img src={item.main_image}/>
					<div className="title">
						<h2>{item.main_title}</h2>
						<span>{item.sub_title}</span>
					</div>
				</div>
			})
		}
		{
			this.state.bannerList2.length !== 0?
			<img src={this.state.bannerList2.img}/>
			:null
		}
		</div>
	}
}

export default Index