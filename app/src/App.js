import './App.css';

import { Link, Route, Routes, Router } from 'react-router-dom';

import Modal from './components/Modal';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/modal/:id" element={<Modal />}></Route>
      </Routes>
    </>
  );
}

export default App;
