import axios from 'axios'

function getLogo(){
	return axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res
	})
}

export {getLogo}