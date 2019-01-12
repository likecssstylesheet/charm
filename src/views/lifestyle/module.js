import axios from 'axios'

function getBanner(){
	return axios({
		url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5'
	}).then(res=>{
		return res.data.banners
	})
}

function getContent(){
	return axios({
		url:'http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1547254476949&summary=cc53be8e1ba65adbb2b382a11050c718&platform_code=H5'
	}).then(res=>{
		return res.data.eventList
	})
}
export {getBanner,getContent}