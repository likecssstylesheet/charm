import React,{Component} from 'react'
import {getBrandInfo }from './model.js'
class Brand extends Component {
	constructor(props) {
		super(props)
		this.state = {
			brandinfo: null
		}
	}

	componentDidMount() {
		getBrandInfo().then(res => {
			console.log(res)
			this.setState({
				brandinfo: res.brandPageImage
			})
		})
	}

	render() {
		return <div>
			<img src={this.state.brandinfo}/>
		</div>
	}
}
export default Brand