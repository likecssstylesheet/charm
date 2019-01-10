import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'

// class Lifestyle extends React.Component {
//   state = {
//     data: [],
//     imgHeight: 176,
//   }
//   componentDidMount() {
//     // simulate img loading
     
// 	return axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5')
// 	.then(res=>{
// 		console.log(res.data.banners)
// 		this.setState({data:res.data.banners})})

//   }
//   render() {
//     return (
//     <div className="life_swipe">
//       <WingBlank style={{width:'100%'}}>
//         <Carousel key={this.state.data.length}
//           autoplay={true}
//           infinite
//           beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//           afterChange={index => console.log('slide to', index)}
//         >
//           {this.state.data.map(val => (
//               <img  key={val.id}
//                 src={val.main_image}
//                 alt=""
//                 style={{ width: '100%', verticalAlign: 'top' }}
//                 onLoad={() => {
//                   // fire window resize event to change height
//                   window.dispatchEvent(new Event('resize'));
//                   this.setState({ imgHeight: 'auto' });
//                 }}
//               />
           
//           ))}
//         </Carousel>
//       </WingBlank>
//       </div>
//     );
//   }
// }
class Lifestyle extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Lifestyle