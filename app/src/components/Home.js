import { useEffect, useState } from 'react';
import { Link, Route, Routes, Router } from 'react-router-dom';
import React from 'react';
import Modal from './Modal';

function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovies(json.data.movies);
        console.log(movies);
        setLoding(false);
      });
  }, []);

  const moviesName = movies.map((movie) => {
    return (
      <Link className="home-link" key={movie.id} to={`/modal/${movie.id}`}>
        <div>
          <div className="movies">
            <img src={movie.medium_cover_image} alt="" />

            <h2>{movie.title}</h2>

            {/* <p>{movie.summary}</p> */}
            <div>
              <ul>
                {movie.genres.map((genres, index) => {
                  return <li key={index}>{genres}</li>;
                })}
              </ul>
            </div>
            <p>평점 : {movie.rating}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="App">
        <div className="container">
          <header>
            <h1>YFLIX</h1>
          </header>
          {loding ? <h1>Loding.....</h1> : null}
          <div className="movie-wrap">{moviesName}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
