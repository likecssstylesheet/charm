import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'
import './index.scss'
import Main from './children'
import Footer from '../../components/footer'
import { Toast, WhiteSpace, Button } from 'antd-mobile';
import Swipe from './swipe'
import {getBanner} from './module.js'

class Lifestyle extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      banner:[]
    };
  }
  componentDidMount() {
    // simulate img loading
 // Toast.loading('玩命加载中...', 3, () => {
 //     console.log('Load complete !!!');
 //   });
  getBanner().then(res=>{
      this.setState({
        banner:res
      })
  })

  }
  render() {
    return (
    <div id="life">
      <div>
        <Swipe data={this.state.banner}></Swipe>
     	<div className="sort">
     		 <img alt="" src="https://cdn13.mei.com/category/20180621/a789fab3fbc384262a0a542c5ae8ca0ae15d3cf3671d4998.jpg"/>
    	 </div>
      <Main {...this.props}/>
      <Footer/>
       </div>
      </div>
    )
  }
  handleClick(data){
    this.props.history.push(`/brand/${data}`)
  }
}

export default Lifestyle




