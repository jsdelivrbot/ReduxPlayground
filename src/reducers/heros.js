let initialState = [
	  {
		name: 'Kaladin',
		title: 'Captain',
		lodge: 'Windrunners'
	  },
	  {
		name: 'Dalinar',
		title: 'Brightlord',
		lodge: 'Stormpathers'
	  },
	  {
		name: 'Shallan',
		title: 'Brightness',
		lodge: 'Lightweavers'
	  }
  	];

export default (state = initialState, action) => {
	switch(action.type){
		case 'ADD_HERO':
			return [...state, action.payload ];
			break;
		default:
			return state;
	}
}