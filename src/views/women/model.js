import axios from 'axios' 
import './index.scss'
function getimg() {
	return axios({
		url: 'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5'
	}).then(res => {
		// console.log(res.data.banners)
		return res.data.banners
	})
}

function getul() {
	return axios({
		url: 'http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000001&ids=2120000100000000276&timestamp=1546998371964&summary=e60787909845a82b89e0ddaa57c800a9&platform_code=H5'
	}).then(res => {
		// console.log(res.data.resultList[0].data)
		return res.data.resultList[0].data
	})
}

function getlist() {
	return axios({
		url: 'http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1546998371823&summary=c18bd9dce7d2c8d583252932e735e4d2&platform_code=H5'
	}).then(res => {
		// console.log(res.data.resultList[0].data)
		return res.data.eventList
	})
}

export {getimg,getul,getlist}
