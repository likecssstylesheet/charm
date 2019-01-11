import axios from 'axios'

function getBanner(){
	return axios({
		url:"http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5"
	}).then(res=>{
		return res.data.banners
	})
}

function getImg(){
	return axios({
		url:'http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=1547184564319&summary=2a6aeb8bc100c1158b918c0cec492485&platform_code=H5'
	}).then(res=>{
		return res.data.resultList[0].data
	})
}
function getContent(){
	return axios({
		url:"http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1547187039779&summary=b1ef0a9c019b9baa1c1c87a34b4a9ab9&platform_code=H5"
	}).then(res=>{
		return res.data.eventList
	})
}

export {getBanner,getImg,getContent}