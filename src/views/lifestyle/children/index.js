import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom'

class Main extends React.Component {
  constructor(props) {
  	
    super(props);
    this.index=1;
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1547082753322&summary=8c4795a4ac33c8e625cd2883270197ca&platform_code=H5').then(res=>{
    	this.setState({
    		 height: hei,
     		 data: res.data.eventList
    	})
    })
    setTimeout(() => this.setState({
     
    }), 0);
  }

  render() {
    return (<div id="push">
      
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
        	this.index++
          this.setState({ refreshing: true });
          axios.get(`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${this.index}&timestamp=1547082753322&summary=8c4795a4ac33c8e625cd2883270197ca&platform_code=H5`)
          .then(res=>{
          	this.setState({
          		 refreshing: false,
          		 data:[...this.state.data,...res.data.eventList]
          	})
          })
        }}
      >
      <div className="nav">
        {this.state.data.map(i => (
          <div key={i.eventId} className="content" onClick={this.handleclick.bind(this,eventId)}>
            	<div className="description">
            		<p>{i.englishName}</p>
            		<p>{i.chineseName}</p>
            		<p>{i.discountText}</p>
            	</div>
            	<img src={i.imageUrl} alt=""/>

          </div>
        ))}
        </div>
      </PullToRefresh>
    </div>);
  }

  handleclick(data){
  		this.props.history.push(`/productmini/${data}`)
  }
}



	

export default Main
	







