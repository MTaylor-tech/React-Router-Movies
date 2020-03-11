import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

function SavedList (props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => {
        return <NavLink key={movie.id} activeClassName='saved-active' to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>
      })}
      <NavLink to="/"><div className="home-button">Home</div></NavLink>
    </div>
  );
}

export default withRouter(SavedList);
