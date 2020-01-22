import React, { Component } from 'react';
import Movie from './components/movie';
import data from './components/data';
import './styles/main.css'

class App extends Component {
  render() {
    let name = [];
    let year = [];
    Object.keys(data).forEach(key => {
      name.push(data[key].title);
      year.push(data[key].year);
    })
    return (
      <div className="container">
        <div className="input-container">
          <label>Search for a Movie</label>
          <input type="text" />
        </div>

        <div className="movies-container">
          {  
            name.map( (movie,i) => {
              return <Movie name={name[i]} title={name[i]} year={year[i]} key={i}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
