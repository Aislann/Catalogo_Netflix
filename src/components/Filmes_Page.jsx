import React from 'react';
import "../App";
import categories from '../api';
import Nav from './Nav';
import Filmes_Series from './Filmes_Series';
import "./Filmes_Series.css"

const Filmes_Page = () => {

  const filmesCategories = categories.filter(category => category.name === 'topRated');
  return (
    <div className="App">
      <Nav />
      {filmesCategories.map((category) => {
        return (
          <Filmes_Series
            key={category.movie}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  )
}

export default Filmes_Page;
