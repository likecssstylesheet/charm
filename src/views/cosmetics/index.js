import React,{Component} from 'react'
import {getbanner,getdatalist} from './model.js'
import './index.scss'

class Cosmetics extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[],
	  	banner:null
	  };
	}
	componentDidMount(){
		getbanner().then(res=>{
			console.log(res,this.state.banner)
			this.setState({
				banner:res
			})
		})
		getdatalist().then(res=>{
			this.setState({
				datalist:res
			})
		})
	}

	render(){
		return <div>

				{	this.state.banner?
					<div className="cosmetic_banner">
						<img src={this.state.banner[0].main_image} alt=""/>
						<div>
							<p className="first">{this.state.banner[0].main_title}</p>
							<p>{this.state.banner[0].sub_title}</p>
							<p>{this.state.banner[0].description}</p>
						</div>
					</div>
					:null
			}	

		</div>
	}
}

export default Cosmetics