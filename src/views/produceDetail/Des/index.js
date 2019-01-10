import React,{Component} from 'react'

class Des extends Component{

	render(){
		return <div className="desp">
			<h1>{this.props.data.name}</h1>
			<del>￥{this.props.data.marketPrice}</del>
			<strong>￥{this.props.data.price}</strong>
			{this.props.data.newTagList.map((item) =>
				<span key={item.labelType} className="likea">{item.tag}</span>)}
			<div className="guess">
				<span className="iconfont icon-likaiim"></span>
				<span>{this.props.data.deliver_date}</span>		
			</div>
			<div className="discounts lis">
				<div className="title">领劵</div> <span>满999减150</span>
			</div>
			<div className="promotion lis">
				<div className="title">促销</div> <span>{this.props.data.promotions.eventList[0].info}</span>
			</div>
			<div className="serve lis">
				<div className="title">服务</div>
				<div className="listPendulum">
					{this.props.data.service_labels.map((item)=>
						<span key={item.label_title}>{item.label_title}</span>
						)}
				</div>
			</div>	
			<div className="size lis">
				<div className="title">尺码</div>
					{this.props.data.size.map((item)=>
						<span key={item.sizeId}>{item.sizeId}</span>
						)}
			</div>
		</div>
	}
}

export default Des
	