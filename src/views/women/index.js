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
									<img src={item.main_image} className="banner" alt="" onClick={this.handleClick.bind(this,item.link_url.slice(-19))}/>
									<div className="info">
										<h3>{item.main_title}</h3>
										<p>{item.sub_title}</p>
										<p>{item.description}</p>
									</div>
									 <ul className="nav">
									 {
										this.state.ullist.map(item => {
											return	<li key={item.categoryTwoId} onClick={this.handleDetail.bind(this,item.eventId)}>
													<img src={item.categoryImgStr} alt=""/>
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
							return	<li onClick={this.handleDetail.bind(this,item.eventId)} key={item.eventId}>
									<img src={item.imageUrl} alt=""/>
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

	handleClick(id) {
		this.props.history.push(`/brand/${id}`)
	}
	handleDetail(categoryOneId) {
		this.props.history.push(`/productmini/${categoryOneId}`)
	}
}

export default Girls