import React,{Component} from 'react'
import {getBrandInfo} from './model.js'
import {connect} from 'react-redux'
import store from '../../store'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import './index.scss'
class Brand extends Component {
	constructor(props) {
		super(props)
		this.state = {
			brandinfo: null
		}
	}

	componentDidMount() {
		this.props.hide()
		getBrandInfo(this.props.match.params.id).then(res => {
			// console.log(res)
			this.setState({
				brandinfo: res
			})
		})
	}
	componentWillUnmount() {
		this.props.show()
	}

	render() {
		return <div id="brand">
		{
			this.state.brandinfo?
			<div className="brandImg">
				<img src={this.state.brandinfo.brandPageImage}/>
				<h1>{this.state.brandinfo.brandName}</h1>
				<span><NavLink to="">+ 关注</NavLink></span>
			</div>
			:null			
		}
		</div>
	}
}
export default connect(
	null,

	{
		show() {
			return {
				type: 'Showheader',
				payload: true
			}
		},

		hide() {
			return {
				type: 'Hideheader',
				payload: false
			}
		}
	}
	)(Brand)
