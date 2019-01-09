import React from 'react'
import axios from 'axios'

function getBanner(){
	return axios({
		url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5'
	}).then(res=>{
		return res.data.banners
	})
}

function getBanner2(){
	return axios({
		url:'http://www.mei.com/appapi/home/newZoneEntrance/v3?credential='
	}).then(res=>{
		return res.data
	})
}


export {getBanner,getBanner2}
