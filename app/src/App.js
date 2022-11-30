import './App.css';

import { Link, Route, Routes, Router } from 'react-router-dom';

import Modal from './components/Modal';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
        <Route
          path={process.env.PUBLIC_URL + '/modal/:id'}
          element={<Modal />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
