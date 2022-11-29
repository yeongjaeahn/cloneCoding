import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [loding, setLoding] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.data.movies);
        console.log(movie);
        setLoding(false);
      });
  }, []);
  return <div className="App">{loding ? <h1>Loding.....</h1> : null}</div>;
}

export default App;
