export default (state=[], action) => {
	switch (action.type){
		case 'FIND_MOVIES':
			return [...state, action.payload];
			break;
		default:
			return state;
	}
}