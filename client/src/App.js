import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={ movie => {
        return <MovieList {...movie} addToSavedList={addToSavedList}/>
      }}/>
      <Route path="/movies/:id" render={ movie => {
        return <Movie {...movie} addToSavedList={addToSavedList}/>
      }}/>
    </div>
  );
};

export default App;
