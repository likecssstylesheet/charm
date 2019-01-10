import React,{Component} from 'react'

class Comment extends Component{

	render(){
		return <div className="comment">
			<h3>用户评论
				<span>(0)</span>
				<a>查看全部</a>
			</h3>
		</div>
	}
}

export default Comment