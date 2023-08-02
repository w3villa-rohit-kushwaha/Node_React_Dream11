// Contest.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Contest.css'; // Import your CSS file for styling

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/matches')
      .then((response) => {
        this.setState({ contests: response.data[0].contests });
      })
      .catch((error) => {
        console.log('Error fetching contests:', error);
      });
  }

  render() {
    const { contests } = this.state;

    return (
      <div className="contest-container">
        <h1 className="contest-heading">All Contests</h1>

        <ul className="contest-list">
          {contests.map((contest) => (
            <li key={contest.id} className="contest-item">
              <div className='contest-div'>
              <div className="contest-name">{contest.name}</div>
              <div className='contest-fee'>Entry Fee: {contest.entry_fee}</div>
              <div className='contest-max-fee'>Max Entry: {contest.max_entry}</div>
              <div className='contest-prize'>Prize Pool: {contest.prize_pool}</div>
              </div>

              {/* Display other contest details here */}
            </li>
          ))}
        </ul>
        <Link to="/players" className="make-team-link">
                Make your team now
              </Link>
        <Link to="/teams" className="teams-link">
          teams details
        </Link>
      </div>
    );
  }
}

export default Contest;
