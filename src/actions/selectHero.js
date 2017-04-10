export default (currentHero) => {
	return {
		type: 'SELECT_HERO',
		payload: currentHero
	}
}