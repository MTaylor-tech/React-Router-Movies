import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [savedIds, setSavedIds] = useState([]);

  const addToSavedList = movie => {
    if (!savedIds.includes(movie.id)) {
      setSavedIds([...savedIds, movie.id]);
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={props=><Movie {...props} addToSavedList={addToSavedList} />}/>
    </div>
  );
};

export default App;
