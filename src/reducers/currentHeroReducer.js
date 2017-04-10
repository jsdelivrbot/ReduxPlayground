export default (state = {}, action) => {
	switch(action.type){
		case 'SELECT_HERO':
			return action.payload;
			break
		default:
			return state;
	}
}