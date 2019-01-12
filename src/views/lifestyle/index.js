import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
import Main from './children'
import Footer from '../../components/footer'
import Swipe from './swipe'
import {getBanner,getContent} from './module.js'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import { Toast} from 'antd-mobile'


class Lifestyle extends Component {
  constructor(props) {
    super(props);
    this.index = 1
    this.state = {
      banner:[],
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data:[],
      updata:[]
    };
  }

  componentDidMount() {
    Toast.loading('玩命加载中...', 1, () => {
       
     },true);
    getBanner().then(res=>{
        this.setState({
          banner:res
        })
    })
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    getContent().then(res=>{
      // console.log(res)
       this.setState({
        height: hei,
        data:res
      })  
    })

  }
  render() {
    return (
    <div id="life">
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
        url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${this.index}&timestamp=1547254932870&summary=aa162ed559159cc1a1c7a6f13739ba20&platform_code=H5`
      }).then(res=>{
        // return res.data.eventList
        this.setState({
                data:[...this.state.data,...res.data.eventList]
            });
      })
        }}
      >
      <div>
        <Swipe data={this.state.banner} ccc={this.props}></Swipe>
      <div className="sort">
         <img alt="" src="https://cdn13.mei.com/category/20180621/a789fab3fbc384262a0a542c5ae8ca0ae15d3cf3671d4998.jpg"/>
       </div>
       </div>
      <div className="xiuer">
    <ul>
        {
          this.state.data.map(item =>
            <li key={item.eventId} onClick={this.handleDetail.bind(this,item.eventId)}>
              <img src={item.imageUrl} alt="图片出不来了"/>
              <div>
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
    )
  }
  handleClick(data){
    this.props.history.push(`/brand/${data}`)
  }
  handleDetail(data){
      this.props.history.push(`/productmini/${data}`)
  }
}


export default Lifestyle




