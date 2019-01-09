const whiteReducer = (prevstate=false,action)=>{

	// console.log(prevstate,action);
	let {type,payload}= action;
	switch(type){
		case "white":
			return payload
		case "noWhite":
			return payload

		default:
			return prevstate
	}

	// return prevstate;
}

export default whiteReducer;