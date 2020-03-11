import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [savedIds, setSavedIds] = useState([]);
  const [currentId, setCurrentId] = useState();

  const addToSavedList = movie => {
    if (!savedIds.includes(movie.id)) {
      setSavedIds([...savedIds, movie.id]);
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      <SavedList list={savedList} currentId={currentId} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={props=><Movie {...props} addToSavedList={addToSavedList} setId={(id)=>setCurrentId(id)} />}/>
    </div>
  );
};

export default App;
