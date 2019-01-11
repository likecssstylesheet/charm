import axios from 'axios' 
function getBrandInfo(num) {
	return axios({
		url: `//www.mei.com/appapi/brand/product/hotNew/v3?logoId=${num}`
	}).then(res => {
		return res.data.body
	})
}

function getGoodthing(num) {
	return axios({
		url: `http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=${num}&pageIndex=1&categoryId=1000000342`
		
	}).then(res => {
		return res.data.body
	})
}

export {getBrandInfo,getGoodthing}
