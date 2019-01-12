import React,{Component} from 'react'
import Swipe from './swipe'
import {getBanner,getImg,getContent} from './module.js'
import './index.scss'
import Footer from '../../components/footer'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Toast} from 'antd-mobile'

class Produce extends Component{
	constructor(props) {
	    super(props);
	    this.index = 1
	    this.state = {
	    	banner:[],
	    	imgs:[],
	    	content:[],
	    	refreshing: false,
		     down: true,
		     height: document.documentElement.clientHeight,
		     data:[],
		    updata:[]
	  	}
	}

	render(){
		return <div id="kids">
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
				url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=${this.index}&timestamp=1547208950753&summary=63fef1ac3892abd982d67094c8f18749&platform_code=H5`
			}).then(res=>{
				// return res.data.eventList
				this.setState({
	          		data:[...this.state.data,...res.data.eventList]
	       		});
			})
        }}
      >
      	<div className="swipe"><Swipe data={this.state.banner}></Swipe></div>
		<ul className="nav">
			{
				this.state.imgs.map((item,index)=>
					<li key={item.siloId+index}>
						<img src={item.categoryImgStr} alt="图片出不来了"/>
					</li>
				)
			}
		</ul>
      	<div className="lihaibo">
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
	componentDidMount(){
		Toast.loading('玩命加载中...', 1, () => {
		  
		 },true);
	    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
	    getContent().then(res=>{
		     this.setState({
		      height: hei,
		      data:res
		    })	
	    })
 	 }
	componentWillMount(){
		getBanner().then(res=>{
			this.setState({
				banner:res
			})
		})
		getImg().then(res=>{
			this.setState({
				imgs:res
			})
		})
		getContent().then(res=>{
			this.setState({
				content:res
			})
		})
	}
	handleDetail(id){
		this.props.history.push(`/productmini/${id}`)
	}
}


export default Produce