import React,{Component} from 'react'
import './index.scss'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import {getContent} from './module.js'

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Crossborder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
  }

  render() {
    return (<div id="crossborder">
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow:'auto'
        }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false,
            	data:[...this.state.data,'xiaoming','xiaomiao']

            });
            console.log('aaa')
          }, 1000);
        }}
      >
      <img src="http://www.mei.com/static/img/mktbanner-default.cbf29f0.jpg" alt="图片不好使啦"/>
        {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
           {i}
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}

export default Crossborder