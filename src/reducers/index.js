import { combineReducers } from 'redux';
//import selectedHero from './selectedHero';
import heros from './heros';
import count from './count';
import currentHero from './currentHeroReducer';
import movies from './movies';

const rootReducer = combineReducers({
	count,
	heros,
	currentHero,
	movies
});

export default rootReducer;
