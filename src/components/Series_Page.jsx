import React from 'react';
import "../App";
import categories from '../api';
import Nav from './Nav';
import Filmes_Series from './Filmes_Series';

const Series_Page = () => {

  const seriesCategories = categories.filter(category => category.name === 'series');
  return (
    <div className="App">
      <Nav />
      {seriesCategories.map((category) => {
        return (
          <Filmes_Series
          key={category.name}
          path={category.path}
          isLarge={category.isLarge}
          />
        );
      })}
    </div>
  )
}

export default Series_Page;
