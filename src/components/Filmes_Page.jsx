// import React from 'react'
// import "../App";
// import Row from './Row';
// import categories from '../api';
// import Nav from './Nav';

import React from 'react';
import "../App";
import categories from '../api';
import Nav from './Nav';
import Row from './Row';

const Filmes_Page = () => {

  const filmesCategories = categories.filter(category => category.name === 'topRated');
  return (
    <div className="App">
      <Nav />
      {filmesCategories.map((category) => {
        return (
          <Row
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
