import React,{Component} from 'react'
import {getbanner,getdatalist,distype} from './model.js'
import './index.scss'

class Cosmetics extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[],
	  	banner:null,
	  	list:[]
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
		distype().then(res=>{

			this.setState({
				list:res
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
			{
				this.state.list.length==0?
				null
				:<div className="classify">
					<ul>
						{this.state.list.map(item=><li key={item.categoryTwoId}> <img src={item.categoryImgStr}/></li>)}
					</ul>
				</div>
				}

			{
				this.state.datalist.length==0?
				null
				:
				<div className="nav">
				{this.state.datalist.map(item=>
					<div key={item.eventId} className="content">
						<div className="description">
							<p>{item.englishName}</p>
							<p>{item.chineseName}</p>
							<p>{item.discountText}</p>
						</div>
						<img src={item.imageUrl} alt=""/>
					</div>)}
				</div>
			}	

		</div>
	}
}

export default Cosmetics