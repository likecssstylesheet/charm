import React,{Component} from 'react'

class Parameter extends Component{

	render(){
		return <div className="list_parameter">
			<h3>商品参数</h3>
			<div>
					<ul>
						{this.props.data.map(item=>
							<li key={item.name}>
								<label>{item.name}</label>
								<span>{item.value}</span>
							</li>
							)}
					</ul>
			</div>
		</div>
	}
}

export default Parameter