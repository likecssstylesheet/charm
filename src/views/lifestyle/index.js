import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'
import './index.scss'
import Main from './children'
class Lifestyle extends React.Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
     
	return axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5')
	.then(res=>{
		console.log(res.data.banners)
		this.setState({data:res.data.banners})})

  }
  render() {
    return (
    <div>
    <div className="life_swipe">
      <WingBlank style={{width:'100%'}} >
        <Carousel key={this.state.data.length}
          autoplay={true}
          infinite
         
        >
          {this.state.data.map(val => (
              <img  key={val.id}
                src={val.main_image}
                alt="失败"
                style={{ width: '100%', verticalAlign: 'top' }}
                
              />
           
          ))}
        </Carousel>
      </WingBlank>
     
      </div> 
      <div className="sort">
     		 <img alt="" src="https://cdn13.mei.com/category/20180621/a789fab3fbc384262a0a542c5ae8ca0ae15d3cf3671d4998.jpg"/>
     </div>
      <Main/>

      </div>
    )
  }
}


export default Lifestyle