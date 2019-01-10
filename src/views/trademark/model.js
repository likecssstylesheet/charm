import axios from 'axios'

function getWomenLogo(){
	return axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res.data.body.womenLogo.brandLogo
	})
}

function getMenLogo(){
	return axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res.data.body.menLogo.brandLogo
	})
}
function getbeautyLogo(){
	return axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res.data.body.beautyLogo.brandLogo
	})
}
function gethomeLogo(){
	return axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res.data.body.homeLogo.brandLogo
	})
}
function getkidsLogo(){
	return axios({
		url:'http://www.mei.com/appapi/brand/list/v3'
	}).then(res=>{
		return res.data.body.kidsLogo.brandLogo
	})
}


export {getWomenLogo,getMenLogo,getbeautyLogo,gethomeLogo,getkidsLogo}