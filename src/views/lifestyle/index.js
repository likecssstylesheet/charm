import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { PullToRefresh, Button } from 'antd-mobile';
import axios from 'axios'
import './index.scss'
import Main from './children'
import Footer from '../../components/footer'
class Lifestyle extends React.Component {
  state = {
    data: [],
    imgHeight: 176,
    refreshing: false,
    down: true,
    height: document.documentElement.clientHeight,
    data: [],
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
    <div id="life">
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
     { this.state.data?
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
}

export default Lifestyle



// function genData() {
//   const dataArr = [];
//   for (let i = 0; i < 20; i++) {
//     dataArr.push(i);
//   }
//   return dataArr;
// }

// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//   }

//   componentDidMount() {
//     const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
//     setTimeout(() => this.setState({
//       height: hei,
//       data: genData(),
//     }), 0);
//   }

//   render() {
//     return (<div>
//       <Button
//         style={{ marginBottom: 15 }}
//         onClick={() => this.setState({ down: !this.state.down })}
//       >
//         direction: {this.state.down ? 'down' : 'up'}
//       </Button>
//       <PullToRefresh
//         damping={60}
//         ref={el => this.ptr = el}
//         style={{
//           height: this.state.height,
//           overflow: 'auto',
//         }}
//         indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
//         direction={this.state.down ? 'down' : 'up'}
//         refreshing={this.state.refreshing}
//         onRefresh={() => {
//           this.setState({ refreshing: true });
//           setTimeout(() => {
//             this.setState({ refreshing: false });
//           }, 1000);
//         }}
//       >
//         {this.state.data.map(i => (
//           <div key={i} style={{ textAlign: 'center', padding: 20 }}>
//             {this.state.down ? 'pull down' : 'pull up'} {i}
//           </div>
//         ))}
//       </PullToRefresh>
//     </div>);
//   }
// }
