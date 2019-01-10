import React,{Component} from 'react'

class StopWord extends Component{

	render(){
		return <div className="stopword">
			<img src={this.props.data}/>
		</div>
	}
}

export default StopWord