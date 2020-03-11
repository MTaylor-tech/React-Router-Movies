import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

function SavedList (props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => {
        console.log(props.location.pathname);
        if (props.location.pathname===`/movies/${movie.id}`) {
          return (<NavLink key={movie.id} active className='saved-active' to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>)
        } else {
          return (<NavLink key={movie.id} to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>)
        }
      })}
      <NavLink to="/"><div className="home-button">Home</div></NavLink>
    </div>
  );
}

export default withRouter(SavedList);
