import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addHero from '../actions/addHero';
import increment from '../actions/increment';
import decrement from '../actions/decrement';
import selectHero from '../actions/selectHero';
import currentHero from '../reducers/currentHeroReducer';
import findMovies from '../actions/findMovies';
import movies from '../reducers/movies';
import axios from 'axios';

let movieIndex = -1;

class App extends Component {
  constructor(props){
    super(props);
    this.state={hero: '', keyword: ''};
  }
 
  findMovies(){
    console.log(movieIndex);
    movieIndex++;
    console.log('new index: '+movieIndex);
    if(this.state.keyword === ''){
      alert('Type a keyword jackass!');
      movieIndex--;
      return true;
    }

    let request;
    axios.get(`http://www.omdbapi.com/?s=${this.state.keyword}`)
      .then(request => {
        request = request
        this.props.findMovies(request);
      });
  }

  renderMovies(){
    if(!this.props.movies[movieIndex]){
      return <li>Woops no movies in your list!</li>;
    }  
    return this.props.movies[movieIndex].data.Search.map(movie => {
      return <li key={movie.imdbID}>{movie.Title}</li>
    })
  }


  renderHeroes(){
    return this.props.heros.map(hero => {
      return <li key={hero.name} onClick={()=>this.props.selectHero(hero)}>{hero.name}</li>
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <hr />
        <h3>Heroes: </h3>
        <input type='text' placeholder='Hero Name' value={this.state.hero} onChange={e=>this.setState({hero: e.target.value})} />
        <button onClick={()=>this.props.addHero({name: this.state.hero})}>Add Hero</button>
        <ul>{this.renderHeroes()}</ul>
        <hr />
        <h3>Current Hero: {this.props.currentHero.name}</h3>
        <hr />
        <h3>Search for movies</h3>
        <input type='text' placeholder='type movie keyword' value={this.state.keyword} onChange={e => this.setState({keyword: e.target.value})} />
        <button onClick={this.findMovies.bind(this)}>Find Movies</button>
        <ul>{this.renderMovies()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		heros: state.heros,
    count: state.count,
    currentHero: state.currentHero,
    movies: state.movies
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addHero, increment, decrement, selectHero, findMovies}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);