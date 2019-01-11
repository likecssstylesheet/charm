import React,{Component} from 'react'
import axios from 'axios'
import Info from './info'
import './index.scss'
import Category from './category'
import Footer from '../../components/footer'
import {connect} from 'react-redux'

class Upcoming extends Component{
	constructor(props) {
	super(props);
	this.scroll = this.handleScroll.bind(this)
	this.state = {
		data:null
	  };
	}

	render(){
		return <div id="comeon">
					{this.state.data?
					<div>
						<Info data={this.state.data.tips}></Info>
						<Category data={this.state.data.lists[0].events}></Category>
						<Footer />
					</div>
					:null}
		</div>
	}
	componentDidMount(){
		this.props.changewhite();
		window.addEventListener('scroll', this.scroll);
		axios({
			url:'http://www.mei.com/appapi/upcoming/index/v3?platform_code=H5'
					
			}).then((res)=>{
				this.setState({
					data:res.data
				})
				
	        })
    	}
    handleScroll(){
    	if(document.documentElement.scrollTop===0){
  			document.documentElement.scrollTop=1;
  		}
    }
    componentWillUnmount(){
    	window.removeEventListener('scroll',this.scroll)
    	document.documentElement.scrollTop=0;
	}
}
export default connect(
  null,
  {
  changewhite(){
      return {
        type:'white',
        payload:true
      }
    },
  changeopacity(){
      return {
        type:'noWhite',
        payload:false
      }
    }
  }
)(Upcoming)