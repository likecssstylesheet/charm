import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'
import './index.scss'
import Main from './children'
import Footer from '../../components/footer'
import { Toast, WhiteSpace, Button } from 'antd-mobile';
class Lifestyle extends Component {
  state = {
    data1: []
   
  }
  componentDidMount() {
    // simulate img loading
 Toast.loading('Loading...', 3, () => {
     console.log('Load complete !!!');
   });

	return axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5')
	.then(res=>{
		console.log(res.data.banners)

		this.setState({data1:res.data.banners})})

  }
  render() {
    return (
    <div id="life">
    {this.state.data1.length==0?
    null  
    :<div>
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
     	<div className="sort">
     		 <img alt="" src="https://cdn13.mei.com/category/20180621/a789fab3fbc384262a0a542c5ae8ca0ae15d3cf3671d4998.jpg"/>
    	 </div>
      <Main {...this.props}/>
      <Footer/>
       </div>
    
 	}
  
      </div>
    )
  }
  handleClick(data){
    this.props.history.push(`/brand/${data}`)
  }
}

export default Lifestyle




