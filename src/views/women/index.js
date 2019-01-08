import React,{Component} from 'react'
import {getimg} from './model.js'
class Girls extends Component{
	constructor(props){
		super(props)
		this.state = {
			looplist: []
		}
	}

	componentDidMount() {
			getimg().then(res => {
				this.setState({
					looplist: res
				})
			})
	}
	render(){
		return <div id="women">
			<div>
			{
				this.state.looplist.length !== 0 ?
				<img src={this.state.looplist[0].main_image} className="banner" alt=""/>:null 
			}
			</div>	
		</div>
	}
}

export default Girls