import React from 'react';
import "../App";
import categories from '../api';
import Nav from './Nav';
import Row from './Row';

const Series_Page = () => {

  const seriesCategories = categories.filter(category => category.name === 'series');
  return (
    <div className="App">
      <Nav />
      {seriesCategories.map((category) => {
        return (
          <Row
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
