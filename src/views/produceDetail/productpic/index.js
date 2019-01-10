import React,{Component} from 'react'

class ProductPic extends Component{

	render(){
		return <div className="show">
			<h3>商品详情</h3>
			{this.props.data.product_img1.map(item=>
				<img src={item.bigImgUrl} key={item.bigImgUrl}/>
				)}
			<p>{this.props.data.message}</p>
			{this.props.data.maintenanceList.length>0?<div className="maintain">
				<h3>洗护与保养</h3>
				<p>{this.props.data.maintenanceList[0]}</p>
			</div>:null}
		</div>
	}
}

export default ProductPic