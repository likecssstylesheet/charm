import axios from "axios"

function getConnent(){
	return axios({
		url:'http://www.mei.com/appapi/mkt/newZoneCoupon?credential='
	}).then(res=>{
		return res.data
	})
}

export {getConnent}

