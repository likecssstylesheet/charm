import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'

class Main extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[]
	  };
	}
	render(){
		return <div className="ccc">
				{
					this.state.datalist.length==0?
						null
						:
						<div className="nav">
						{this.state.datalist.map(item=>
							<div key={item.eventId} className="content">
								<div className="description">
									<p>{item.englishName}</p>
									<p>{item.chineseName}</p>
									<p>{item.discountText}</p>
								</div>
								<img src={item.imageUrl} alt=""/>
							</div>)}
						</div>
					}
		</div>
	}

	componentDidMount(){

	 axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1547082753322&summary=8c4795a4ac33c8e625cd2883270197ca&platform_code=H5')
	.then(res=>{this.setState({
				datalist:res.data.eventList
			})})

}
}



	

export default Main
	



