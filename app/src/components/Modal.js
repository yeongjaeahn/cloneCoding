import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Modal() {
  const { id } = useParams();
  const [moviess, setMoviess] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImage, setMovieImage] = useState([]);
  const [movieDes, setMovieDes] = useState([]);
  const [loding, setLoding] = useState(true);

  console.log('11111', id);

  useEffect(() => {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => {
        setMoviess(res.data.data.movie);
        setLoding(false);
        console.log('ddd', moviess);
        setMovieTitle(res.data.data.movie.title);
        setMovieImage(res.data.data.movie.medium_cover_image);
        setMovieDes(res.data.data.movie.description_full);
      });
  }, []);

  return (
    <>
      <header>
        <h1>YFLIX : Detail</h1>
      </header>
      {loding ? <h1>Loding.....</h1> : null}
      <div className="modal-wrap">
        <div className="modal-box">
          <div className="modal-poster">
            <img className="modal-img" src={movieImage} alt="" />
          </div>
          <div className="modal-contant">
            <h1 className="modal-title">{movieTitle}</h1>
            <p className="modal-summary">{movieDes}</p>
            {!loding ? (
              <Link className="link" to="/">
                {'<< ' + ' HOME'}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
