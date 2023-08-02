import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '././Team.css'


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get('http://localhost:4000/teams')
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.log('Error fetching teams:', error);
      });
  }, []);

  return (
    <div className='team-div'>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team._id}>
            <h2>{team.teamName}</h2>
            <p>Players:</p>
            <ul>
              {team.players.map((player) => (
                <li key={player._id}>
                  {player.name} - {player.role} - {player.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
