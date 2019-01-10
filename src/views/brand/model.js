import axios from 'axios' 
function getBrandInfo(num) {
	return axios({
		url: `//www.mei.com/appapi/brand/product/hotNew/v3?logoId=${num}`
	}).then(res => {
		return res.data.body
	})
}

export {getBrandInfo}