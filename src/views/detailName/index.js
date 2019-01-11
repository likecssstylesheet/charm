import React,{Component} from 'react'
import './index.scss'
import axios from 'axios'
import {connect} from 'react-redux'

class DetailName extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false,
	  	datalist:[],
	  	word:[],
	  	shop:''
	  };
	}
	render(){
		return <div id="detailname">
			<header>
				<a href="/#/trademark" className="left"><span className="iconfont">&#xe61e;</span></a>
				<span className="center">女士品牌</span>
				<a className="right" onClick={this.handleShow.bind(this)}>
					<span className="iconfont">&#xe678;</span>
					{
						this.state.isShow?
						<span className="three"></span>
						:null
					}
				</a>

				{
					this.state.isShow?
					<ul>
						<li><a href="#">首页</a></li>
						<li><a href="#">购物袋</a></li>
						<li><a href="#" className="bu">个人中心</a></li>
					</ul>
					:null
				}
			</header>
			<ul className="content">
				{
					this.state.datalist.map(item=>
						<li key={item.logoId}>
							<a href="#">{item.brandName}</a>
						</li>
					)
				}
			</ul>
			<ul className="word">
				{
					this.state.word.map((item)=>
						<li key={item}>{item}</li>
					)	
				}
			</ul>
		</div>
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		axios({
			url:`http://www.mei.com/appapi/brand/more/v3?siloId=${this.props.match.params.id}`
		}).then(res=>
			// console.log(res.data.body.brandList)
			this.setState({
				datalist:res.data.body.brandList,
				word:res.data.body.abcSort
			})
		)		
		this.props.hide();
	}
	componentWillUnmount(){
		this.props.show();
	}
	handleShow(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default connect(
  null,
  {
  hide(){
      return {
        type:"Hideheader", 
		payload:false  
      }
    },
  show(){
      return {
        type:"Showheader", 
		payload:true 
      }
    }
  }
)(DetailName)