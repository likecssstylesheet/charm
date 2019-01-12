import axios from 'axios'

function getBanner(){
	return axios({
		url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5'
	}).then(res=>{
		return res.data.banners
	})
}
function getNav(){
	return axios({
		url:'http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1547194285118&summary=0a4a81b6cb09055bda70932545e24337&platform_code=H5'
	}).then(res=>{
		return res.data.resultList[0].data
	})
}
function getContent(){
	return axios({
		url:'http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1547194284833&summary=f940605ce9544aacd1397a6e659f0fca&platform_code=H5'
	}).then(res=>{
		return res.data.eventList
	})
}

export {getBanner,getNav,getContent}
