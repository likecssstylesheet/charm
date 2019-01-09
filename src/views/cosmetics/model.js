import axios from 'axios'

function getbanner(){

	return axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5')
	.then(res=>res.data.banners)
}

function getdatalist(){

	return axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1547019121628&summary=d9cec4d1a1d4499a8c39fe0725ebe059&platform_code=H5')
	.then(res=>res.data.eventList)
}

function distype(){
	return axios.get(
	'http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1547003682275&summary=395e0f9244dc2722fd3bd353bd8f79fb&platform_code=H5')
	.then(res=>res.data.resultList[0].data)
}
export {getbanner,getdatalist,distype}