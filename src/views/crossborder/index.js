import React,{Component} from 'react'
import './index.scss'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Footer from '../../components/footer'
// import {getContent} from './module.js'
function getContent(){
	return axios({
		url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1547034069496&summary=d3cc14bdcf06acd6536bd6c365d6d0f0&platform_code=H5`
	}).then(res=>{
		return res.data.eventList
	})
}

class Crossborder extends React.Component {
  constructor(props) {
    super(props);
    this.index = 1
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data:[],
      updata:[]
    };
  }

  componentDidMount(){
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    getContent().then(res=>{
    	// console.log(res)
	     this.setState({
	      height: hei,
	      data:res
	    })	
    })
  }

  render(){
    return (<div id="crossborder">
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
				url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=${this.index}&timestamp=1547034069496&summary=d3cc14bdcf06acd6536bd6c365d6d0f0&platform_code=H5`
			}).then(res=>{
				// return res.data.eventList
				this.setState({
	          		data:[...this.state.data,...res.data.eventList]
	       		});
			})
        }}
      >
        <img src="http://www.mei.com/static/img/mktbanner-default.cbf29f0.jpg" alt="图片不好使啦"/>
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
        <Footer></Footer>
     </PullToRefresh>
    </div>);
  }
  handleDetail(id){
    this.props.history.push(`/productmini/${id}`)
  }
}

export default Crossborder