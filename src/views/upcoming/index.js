import React,{Component} from 'react'
import axios from 'axios'
import Info from './info'
import './index.scss'
import Category from './category'
import Footer from '../../components/footer'

class Upcoming extends Component{
	constructor(props) {
	super(props);
	
	this.state = {
		data:null
	  };
	}

	render(){
		return <div id="comeon">
					{this.state.data?
					<div>
						<Info data={this.state.data.tips}></Info>
						<Category data={this.state.data.lists[0].events}></Category>
						<Footer />
					</div>
					:null}
		</div>
	}
	componentDidMount(){
		axios({
			url:'http://www.mei.com/appapi/upcoming/index/v3?platform_code=H5'
					
			}).then((res)=>{
				this.setState({
					data:res.data
				})
				
	        })
    	}
}
export default Upcoming