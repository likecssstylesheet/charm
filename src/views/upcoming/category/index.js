import React,{Component} from 'react'

class Category extends Component{
	render(){
		return <div className="kind">
				{this.props.data.map(item=>
					<div className="listpendulum" key={item.categoryId}>
						<a href={`#/productmini/${item.eventId}`}>
							<img src={item.imgUrl}/>
							<div className="des">
								<span className="brand">{item.englishName}</span>
								<span className="event">{item.chineseName}</span>
								<span className="discount">{item.discount}</span>
								<span className="redmint">开售提醒</span>
							</div>
						</a>
					</div>
					)}
		</div>
	}
}
export default Category