import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import ReactDom from 'react-dom'
import axios from 'axios'
import './index.scss'
import Main from './children'
import Footer from '../../components/footer'
class Lifestyle extends React.Component {
  state = {
    data1: []
   
  }
  componentDidMount() {
    // simulate img loading
     
	return axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5')
	.then(res=>{
		console.log(res.data.banners)
		this.setState({data1:res.data.banners})})

  }
  render() {
    return (
    <div id="life">
    <div className="life_swipe">
      <WingBlank style={{width:'100%'}} >
        <Carousel key={this.state.data1.length}
          autoplay={true}
          infinite
         
        >
          {this.state.data1.map(val => (
              <div className="img_a" onClick={this.handleClick.bind(this,val.id)} key={val.id}>

              <img  
                src={val.main_image}
                alt="失败"
                style={{ width: '100%', verticalAlign: 'top' }}
                
              />
                <div className="content_life">
                    <p className="first">{val.main_title}</p>
                    <p>{val.sub_title}</p>
                    <p>{val.description}</p>
                  </div>
              </div>
           
          ))}
        </Carousel>
      </WingBlank>
     
      </div> 
     { this.state.data1.length==0?
     	 null
     	:<div className="sort">
     		 <img alt="" src="https://cdn13.mei.com/category/20180621/a789fab3fbc384262a0a542c5ae8ca0ae15d3cf3671d4998.jpg"/>
    	 </div>
    
 	}

      <Main/>
      <Footer/>
      </div>
    )
  }
  handleClick(data){
    this.props.history.push(`/brand/${data}`)
  }
}

export default Lifestyle




