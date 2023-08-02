import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Players.css'

function Players() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/matches')
      .then((response) => {
        // Flatten the players array and add teamId to each player for uniqueness
        const playersWithTeamId = response.data[0].teams.flatMap((team) =>
          team.players.map((player) => ({ ...player, teamId: team.id }))
        );
        setPlayers(playersWithTeamId);
      })
      .catch((error) => {
        console.log('Error fetching players:', error);
      });
  }, []);

  const handlePlayerSelect = (player) => {
    // Check if the player is already selected, then remove it from the list, otherwise add it
    setSelectedPlayers((prevSelected) =>
      prevSelected.some(
        (selectedPlayer) => selectedPlayer.id === player.id && selectedPlayer.teamId === player.teamId
      )
        ? prevSelected.filter(
            (selectedPlayer) => selectedPlayer.id !== player.id || selectedPlayer.teamId !== player.teamId
          )
        : [...prevSelected, player]
    );
  };

  const handleCreateTeam = () => {
    // Check if the team name and players are selected before creating the team
    if (!teamName) {
      console.error('Team name is required');
      return;
    }

    if (selectedPlayers.length !== 11) {
      setWarningMessage('Please select exactly 11 players.');
      return;
    }

    // Implement logic to create the team and send it to the backend for storage
    const teamData = {
      teamName,
      players: selectedPlayers,
    };

    axios
      .post('http://localhost:4000/teams', teamData)
      .then((response) => {
        // Handle successful team creation
        console.log('Team created:', response.data);
        // You can also show a success message to the user
        // Reset the team name and selected players after successful creation
        setTeamName('');
        setSelectedPlayers([]);
        setWarningMessage('');
      })
      .catch((error) => {
        // Handle error
        console.error('Error creating team:', error);
      });
  };

  return (
    <div className='team-div'>
      <h1>All Players</h1>
      <form>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <ul>
          {players.map((player) => (
            <li key={`${player.teamId}-${player.id}`}>
              <input
                type="checkbox"
                onChange={() => handlePlayerSelect(player)}
                checked={selectedPlayers.some(
                  (selectedPlayer) =>
                    selectedPlayer.id === player.id && selectedPlayer.teamId === player.teamId
                )}
              />
              {player.name} - {player.role} - {player.price}
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleCreateTeam}>
          Create Team
        </button>
        {warningMessage && <p>{warningMessage}</p>}
      </form>
    </div>
  );
}

export default Players;
