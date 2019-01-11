import React,{Component} from 'react'
import Swipe from './swipe'
import {getBanner,getImg,getContent} from './module.js'
import {connect} from 'react-redux'
import './index.scss'
import Footer from '../../components/footer'

class Produce extends Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	banner:[],
	    	imgs:[],
	    	content:[]
	  	}
	}

	render(){
		return <div id="kids">
				<Swipe data={this.state.banner}></Swipe>
				<ul className="nav">
					{
						this.state.imgs.map(item=>
							<li key={item.siloId}>
								<img src={item.categoryImgStr} alt="图片出不来了"/>
							</li>
						)
					}
				</ul>
				<div className="lihaibo">
					<ul>
						{
							this.state.content.map(item=>
								<li key={item.eventId}>
									<img src={item.imageUrl} alt="图片出不来了"/>
									<div>
										<p>{item.englishName}</p>
										<p>{item.chineseName}</p>
										<p>{item.discountText}</p>
									</div>
								</li>
							)
						}
					</ul>
				</div>
				<Footer></Footer>
			</div>

	}

	componentWillMount(){
		getBanner().then(res=>{
			this.setState({
				banner:res
			})
		})
		getImg().then(res=>{
			this.setState({
				imgs:res
			})
		})
		getContent().then(res=>{
			this.setState({
				content:res
			})
		})
	}	

	componentWillUnmount(){
		
	}
}


export default Produce