import axios from 'axios'

function getbanner(){

	return axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5')
	.then(res=>res.data.banners)
}

function getdatalist(){

	return axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1546996688146&summary=7a6a56e9d07c6000db554d90ac493c9f&platform_code=H5')
	.then(res=>res.data.eventList)
}

export {getbanner,getdatalist}