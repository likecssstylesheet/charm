import axios from 'axios'

function getBanner(){
	return axios({
		url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5'
	}).then(res=>{
		return res.data.banners
	})
}

export {getBanner}