import React,{Component} from 'react'
import {getBanner,getNav,getContent} from './module.js'
import './index.scss'
import Footer from '../../components/footer'

class Men extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	banner:[],
	  	nav:[],
	  	content:[]
	  };
	}

	render(){
		return <div id="men">
			{
				this.state.banner.map(item=>
				<div className="banner">
					<img src={item.main_image} alt="图片不好使啦"/>
					<div>
						<h2>{item.main_title}</h2>
						<p>{item.sub_title}</p>
						<p>{item.description}</p>
					</div>
				</div>
				)
			}
			<ul className="nav">
				{
					this.state.nav.map(item=>
						<li key={item.siloId}>
							<img src={item.categoryImgStr} alt="图片不好使啦"/>
						</li>
					)
				}
			</ul>
				<div className="content">
					<ul>
						{
							this.state.content.map(item=>
								<li key={item.eventId} onClick={this.handleDetail.bind(this,item.eventId)}>
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
		getNav().then(res=>{
			this.setState({
				nav:res
			})
		})
		getContent().then(res=>{
			this.setState({
				content:res
			})
		})
	}
	handleDetail(id){
		this.props.history.push(`/productmini/${id}`)
	}
}

export default Men