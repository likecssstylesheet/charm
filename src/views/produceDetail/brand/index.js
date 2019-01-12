import React,{Component} from 'react'

class Brand extends Component{

	render(){
		return <div className="brand">
			<h3>
				<a href={`#/brand/${this.props.data.brandLogoId}`}>
					<strong>{this.props.data.brand}</strong>
					<span>品牌主页</span>
					<img src={this.props.data.brandImg} alt="显示失败"/>
					<p>{this.props.data.brand_story}</p>
				</a>
			</h3>
		</div>
	}
}

export default Brand