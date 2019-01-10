import React,{Component} from 'react'

class Recommend extends Component{

	render(){
		return <div className="recommend">
			<h3>大家都在看</h3>
			{this.props.data.map(item=>
				<div key={item.productId}>
					<img src={item.imgUrl}/>
					<span className="brand">{item.brand_name}</span>
					<span className="name">{item.product_name}</span>
					<span className="price">￥{item.itemPriceDto.price}</span>
					<del>￥{item.market_price}</del>
					<span className="discount">{item.discount}折</span>
				</div>
				)}
		</div>
	}
}

export default Recommend