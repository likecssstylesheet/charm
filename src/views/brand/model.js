import axios from 'axios' 

function getBrandInfo() {
	return axios({
		url: 'http://www.mei.com/appapi/brand/brandInfo/v3'
	}).then(res => {
		// console.log(res.data.banners)
		return res.data.brandInfo
	})
}

export {getBrandInfo}