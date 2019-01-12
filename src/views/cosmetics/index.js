import React,{Component} from 'react'
import {getbanner,getdatalist,distype} from './model.js'
import './index.scss'

import Main from './children'
import { Toast} from 'antd-mobile'

class Cosmetics extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[],
	  	banner:null,
	  	list:[]
	  };
	}
	componentWillMount(){
		Toast.loading('玩命加载中...', 1, () => {
		  
		 },true);
	}
	componentDidMount(){
		

		getbanner().then(res=>{
			
			this.setState({
				banner:res
			})
		})
	
		distype().then(res=>{

			this.setState({
				list:res
			})
		})


	}
	clickpush(data){
		this.props.history.push(`/productmini/${data}`)
	}

	render(){
		return <div id="cos">

				
	{	this.state.banner?
			<Main {...this.props}>
							<div>
							<div id="cosmetic_banner">
								<img src={this.state.banner[0].main_image} alt=""/>
								<div>
									<p className="first">{this.state.banner[0].main_title}</p>
									<p>{this.state.banner[0].sub_title}</p>
									<p>{this.state.banner[0].description}</p>
								</div>
							</div>
						
						<div className="classify" >
							<ul>
								{this.state.list.map(item=><li key={item.categoryTwoId}> <img src={item.categoryImgStr} alt=""/></li>)}
							</ul>
						</div>
						</div>						
			</Main>
			:null}
				

		</div>
	}
}

export default Cosmetics