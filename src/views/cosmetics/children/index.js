import React,{Component} from 'react'
import {getdatalist} from '../model.js'

class Main extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[]
	  };
	}
	render(){
		return <div>
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

	getdatalist().then(res=>{
			this.setState({
				datalist:res
			})
		})
	}

}
export default Main
	



