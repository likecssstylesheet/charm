import React,{Component} from 'react'
import {getBanner,getNav,getContent} from './module.js'
import './index.scss'
import Footer from '../../components/footer'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Men extends Component{
	constructor(props) {
	  super(props);
	  this.index = 1
	  this.state = {
	  	banner:[],
	  	nav:[],
	  	content:[],
	  	refreshing: false,
      	down: true,
     	 height: document.documentElement.clientHeight,
      	data:[],
     	 updata:[]
	  };
	}

	render(){
		return <div id="men">
	     <PullToRefresh
	        damping={60}
	        ref={el => this.ptr = el}
	        style={{
	          height: this.state.height,
	          overflow:'auto'
	        }}
	        direction={'up'}
	        onRefresh={() =>{
	        	this.index++
		        axios({
					url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=${this.index}&timestamp=1547206370028&summary=de8c66dd36909f0c048f0046e0747567&platform_code=H5`
				}).then(res=>{
					this.setState({
		          		data:[...this.state.data,...res.data.eventList]
		       		});
				})
	        }}
	      >	
			{
				this.state.banner.map((item,index)=>
				<div className="banner" key={index}>
				<a href={`#/brand/${item.link_url.slice(-19)}`}>
					<img src={item.main_image} alt="图片不好使啦"/>
				</a>
					<div>
						<h2>{item.main_title}</h2>
						<p>{item.sub_title}</p>
						<p>{item.description}</p>
					</div>
				</div>
				)
			}
			<ul className="nav">
				{
					this.state.nav.map((item,index)=>
						<li key={item.siloId+index}>
							<img src={item.categoryImgStr} alt="图片不好使啦"/>
						</li>
					)
				}
			</ul>
	
			<div className="content">
					<ul>
			        {
			        	this.state.data.map(item =>
			          	<li key={item.eventId} onClick={this.handleDetail.bind(this,item.eventId)}>
			          		<img src={item.imageUrl} alt="图片出不来了"/>
			          		<div>
			          			<span>{item.siloCategory}直发</span>
								<p>{item.englishName}</p>
								<p>{item.chineseName}</p>
								<p>{item.discountText}</p>
							</div>

			          	</li>
			       		)
			        }
			        </ul>
			 </div>
	        <Footer></Footer>
	     </PullToRefresh>
		</div>
	}
	componentWillMount(){
		getBanner().then(res=>{
			this.setState({
				banner:res
			})
		})
		getNav().then(res=>{
			this.setState({
				nav:res
			})
		})
		getContent().then(res=>{
			this.setState({
				content:res
			})
		})
	}
	componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    getContent().then(res=>{
    	// console.log(res)
	     this.setState({
	      height: hei,
	      data:res
	    })	
    })
  }

	handleDetail(id){
		this.props.history.push(`/productmini/${id}`)
	}
}

export default Men