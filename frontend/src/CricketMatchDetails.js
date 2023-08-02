import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './CricketMatchDetails.css';

const CricketMatchDetails = () => {
  const [matchesData, setMatchesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apikey = "b62e19fe-3d80-4c44-a871-e582db8b95cd";
      try {
        const response = await axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=${apikey}&offset=0`);
        setMatchesData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className="container motion-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <h2>Current Match Information</h2>
      {matchesData.length > 0 ? (
        matchesData.map((element, index) => (
          <motion.div
            key={index}
            className="match-item motion-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p>Country Name: {element.name}</p>
            <p>Match Type: {element.matchType}</p>
            <p>Series ID: {element.series_id}</p>
            <p>Status: {element.status}</p>
            <p>Venue: {element.venue}</p>
            <p>Date: {element.date}</p>
            <p>DateTimeGMT: {element.dateTimeGMT}</p>
          </motion.div>
        ))
      ) : (
        <motion.p
          className="no-matches motion-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          No current matches available.
        </motion.p>
      )}
    </motion.div>
  );
};

export default CricketMatchDetails;
