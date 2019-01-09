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

function getDayContent(){
	return axios({
		url:'http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1547002715880&summary=b409b5bd5a5decd6939224e3c728bce8&platform_code=H5'
	}).then(res=>{
		return res.data.lists[0].events
	})
}
function getHotContent(){
	return axios({
		url:'http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1547002715880&summary=b409b5bd5a5decd6939224e3c728bce8&platform_code=H5'
	}).then(res=>{
		return res.data.lists[1].events
	})
}
export {getBanner,getBanner2,getHotContent,getDayContent}
