import axios from 'axios'
import './index.scss'
function getimg() {
	return axios({
		url: 'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5'
	}).then(res => {
		console.log(res.data.banners)
		return res.data.banners
	})
}
export {getimg}