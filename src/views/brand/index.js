import React,{Component} from 'react'
<<<<<<< HEAD
import {getBrandInfo }from './model.js'
=======
import {getBrandInfo} from './model.js'
>>>>>>> b5ab5bd1f5385f115c73a77f443fc01a26e48eaa
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