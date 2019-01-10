import React,{Component} from 'react'
import {getbanner,getdatalist,distype} from './model.js'
import './index.scss'
import Footer from '../../components/footer'
import Main from './children'

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
				this.state.banner?
				
				<div className="classify">
					<ul>
						{this.state.list.map(item=><li key={item.categoryTwoId}> <img src={item.categoryImgStr} alt=""/></li>)}
					</ul>
				</div>
				:null
				}

			<Main></Main>
			<Footer></Footer>	

		</div>
	}
}

export default Cosmetics