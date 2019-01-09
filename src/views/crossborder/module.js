import axios from 'axios'

function getContent(){
	return axios({
		url:'http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1547034069496&summary=d3cc14bdcf06acd6536bd6c365d6d0f0&platform_code=H5'
	}).then(res=>{
		return res.data.eventList
	})
}
export {getContent}