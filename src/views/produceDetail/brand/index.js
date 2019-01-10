import React,{Component} from 'react'

class Brand extends Component{

	render(){
		return <div className="brand">
			<h3>
				<a href="#">
					<strong>{this.props.data.brand}</strong>
					<span>品牌主页</span>
					<img src={this.props.data.brandImg}/>
					<p>{this.props.data.brand_story}</p>
				</a>
			</h3>
		</div>
	}
}

export default Brand