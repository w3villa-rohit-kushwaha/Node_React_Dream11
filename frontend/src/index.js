import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contest from './Contest';
import Players from './Players';
import Teams from './Teams';
import Navbar from './Navbar';
// import AnimatePresence from 'framer-motion'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Navbar/>

      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contest/:id" element={<Contest />} />
          <Route path="/players" element={<Players/>} />
          <Route path="/teams" element={<Teams/>} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
