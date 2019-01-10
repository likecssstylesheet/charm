import axios from 'axios' 
function getBrandInfo(num) {
	return axios({
		url: `http://www.mei.com/appapi/brand/viewCms/v3?logoId=${num}`
	}).then(res => {
		return res.data.body.brandDetail
	})
}

export {getBrandInfo}