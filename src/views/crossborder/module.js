import axios from 'axios'

function getContent(){
	return axios({
		url:'http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1547079658800&summary=b3aaca1cb69404fc5462ed6706d9d1c4&platform_code=H5'
	}).then(res=>{
		return res.data.eventLists
	})
}
export {getContent}