import axios from 'axios'

function getWomenLogo(){
	return axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res.data.body.womenLogo.brandLogo
	})
}

export {getWomenLogo}