import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css'
import MainNav from "./MainNav";

const App = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/matches")
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.log("Error fetching matches:", error);
      });
  }, []);

  useEffect(() => {
    console.log("match", matches);
  }, [matches]);

  return (
    <>
    <MainNav/>
    <div className="container-app">
      <h1 className="heading-team">Team11</h1>
      <ul>
        {matches.map((match) => (
          <li className="matches-li" key={match.id}>
            {match.matches.map((m) => (
              <Link key={m.id} to={`/contest/${m.id}`}>
                {m.team1} vs {m.team2}{" "}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
    {/* <CricketMatchDetails /> */}
    </>
  );
};

export default App;

