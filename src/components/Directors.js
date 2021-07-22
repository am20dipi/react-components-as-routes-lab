import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <div key={index}>
            <h3>Name: {director.name}</h3>
            <p>Movies: {director.movies}</p>
     
          </div>
        )) }
      </div>
    );
  }
  
};

export default Directors
