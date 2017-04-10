export default (movies) => {
	return {
		type: 'FIND_MOVIES',
		payload: movies
	}
}