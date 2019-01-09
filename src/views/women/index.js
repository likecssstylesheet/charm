import React,{Component} from 'react'
import {getimg,getul,getlist} from './model.js'
import {NavLink} from 'react-router-dom'
import Footer from '../../components/footer'
class Girls extends Component{
	constructor(props){
		super(props)
		this.state = {
			looplist: [],
			ullist: [],
			navlist:[]
		}
	}

	componentWillMount() {
			getimg().then(res => {
				this.setState({
					looplist: res
				})
			})

			getul().then(res => {
				this.setState({
					ullist: res
				})
			})

			getlist().then(res => {
				this.setState({
					navlist: res
				})
			})
		}
	render(){
		return <div id="women">
				{
					this.state.looplist.map(item => {
						return	<div key={item.id} className="first">
										<NavLink to=""><img src={item.main_image} className="banner" alt=""/></NavLink>
									<div className="info">
										<h3>{item.main_title}</h3>
										<p>{item.sub_title}</p>
										<p>{item.description}</p>
									</div>
									 <ul className="nav">
									 {
										this.state.ullist.map(item => {
											return	<li key={item.categoryTwoId}>
												<NavLink to="">	
													<img src={item.categoryImgStr} alt=""/>
												</NavLink>
											</li>
										})				
									 }
									</ul>									
								</div>
					})

					
				}

				<ul className="data_info">
					 {
						this.state.navlist.map(item => {
							return	<li key={item.eventId}>
								<NavLink to="">	
									<img src={item.imageUrl} alt=""/>
								</NavLink>
									<div>
										<p>{item.englishName}</p>
										<p>{item.chineseName}</p>
										<p>{item.discountText}</p>
									</div>
							</li>
						})				
					 }
				</ul>
					 
				
			<Footer></Footer>
		</div>
	}
}

export default Girls