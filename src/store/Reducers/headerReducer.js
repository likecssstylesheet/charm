const headerReducer = (prevstate=true,action)=>{

	// console.log(prevstate,action);
	let {type,payload}= action;
	switch(type){
		case "Hideheader":
			return payload
		case "Showheader":
			return payload

		default:
			return prevstate
	}

	// return prevstate;
}

export default headerReducer;