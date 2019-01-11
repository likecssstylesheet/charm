import React,{Component} from 'react'

class Master extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	change:false
	  };
	}
	componentWillMount(){

		this.setState({
			change:this.props.isshow
		})
	}
	
	render(){			
		return 			<div id="master">
								<div className="shaixuan">筛选 <img src="/images/cuohao.png" onClick={this.backto.bind(this)}/></div>
								<div className="prizearound">价格区间 </div>
								<div className="allinput"><input placeholder="￥最低价格" className="inputleft"/><span>一</span><input className="inputright" placeholder="￥最高价格"/></div>
								<ul>
									<li>
										按品牌
									</li>
									<li>
										按类别
									</li>
									<li>
										按尺寸
									</li>
								</ul>
						</div>
						
					
	}	
	backto(){
		this.props.ishide()
	}

}
export default Master