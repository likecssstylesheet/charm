import React,{Component} from "react"
class Popup extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {

	  };
	}

	render(){
		return <div className="modal">
			<div className="mask"></div>
			<div className="data">

			</div>
		</div>
	}
}

export default Popup
