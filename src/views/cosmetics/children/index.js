import React,{Component} from 'react'
import axios from 'axios'
import Footer from '../../../components/footer'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom'


class Main extends Component {
  constructor(props) {
  	
    super(props);
    this.index=1;
    this.header=this.scrollto
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }
  componentWillUnmout(){
  	// window.removeEventListener('scroll',this.header)
  }
 

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1547019121628&summary=d9cec4d1a1d4499a8c39fe0725ebe059&platform_code=H5').then(res=>{
    	this.setState({
    		 height: hei,
     		 data: res.data.eventList
    	})
    })

    // window.addEventListener('scroll',this.header)
    
    	
  }

  scrollto(){

  	
  }

  render() {
    return (<div>
      
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
          axios.get(`http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=${this.index}&timestamp=1547019121628&summary=d9cec4d1a1d4499a8c39fe0725ebe059&platform_code=H5`)
          .then(res=>{
          	this.setState({
          		 refreshing: false,
          		 data:[...this.state.data,...res.data.eventList]
          	})
          })
        }}
      >
      <div className="nav" >

      		{this.props.children}
        {this.state.data.map(i => (
          <div key={i.eventId} className="content" onClick={this.handle.bind(this,i.eventId)}>
            	<div className="description">
            		<p>{i.englishName}</p>
            		<p>{i.chineseName}</p>
            		<p>{i.discountText}</p>
            	</div>
            	<img className="mini" src={i.imageUrl} alt=""/>

          </div>
        ))}
        <Footer ></Footer>
        </div>
      </PullToRefresh>
    </div>);
  }

  handle(data){
  	this.props.history.push(`/productmini/${data}`)
  }
}



	

export default Main
	











