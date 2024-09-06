import React, { useState } from 'react';
import { addMatch } from '../services/productApiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddMatchStyle.css'; 

const AddMatch = () => {
  const [player1Id, setPlayer1Id] = useState('');
  const [player2Id, setPlayer2Id] = useState('');
  const [matchDate, setMatchDate] = useState('');
  const [matchLevel, setMatchLevel] = useState('');
  const [winnerId, setWinnerId] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const currentYear = new Date().getFullYear();
    const matchYear = new Date(matchDate).getFullYear();

    if (!player1Id) newErrors.player1Id = 'Player 1 Id is required';
    if (!player2Id) newErrors.player2Id = 'Player 2 Id is required';
    if (!matchDate) {
      newErrors.matchDate = 'Match Date is required';
    } else if (matchYear !== currentYear) {
      newErrors.matchDate = `Match Date must be within the year ${currentYear}`;
    }

    if (!matchLevel) {
      newErrors.matchLevel = 'Match Level is required';
    } else if (matchLevel !== 'National' && matchLevel !== 'International') {
      newErrors.matchLevel = 'Match Level must be either National or International';
    }
    
    if (!winnerId) {
      newErrors.winnerId = 'Winner Id is required';
    } else if (winnerId !== player1Id && winnerId !== player2Id) {
      newErrors.winnerId = 'Winner Id must be either Player 1 Id or Player 2 Id';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const pData = {
      player1Id: player1Id,
      player2Id: player2Id,
      matchDate: matchDate,
      matchLevel: matchLevel,
      winnerId: winnerId,
    };

    const res = await addMatch(pData);
    if (res != null) {
      setPlayer1Id('');
      setPlayer2Id('');
      setMatchDate('');
      setMatchLevel('');
      setWinnerId('');
      setErrors({});
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Player 1 Id:</label>
        <input
          type="text"
          className="form-control"
          value={player1Id}
          onChange={(e) => setPlayer1Id(e.target.value)}
        />
        {errors.player1Id && <span className="text-danger">{errors.player1Id}</span>}
      </div>
      <div className="form-group">
        <label>Player 2 Id:</label>
        <input
          type="text"
          className="form-control"
          value={player2Id}
          onChange={(e) => setPlayer2Id(e.target.value)}
        />
        {errors.player2Id && <span className="text-danger">{errors.player2Id}</span>}
      </div>
      <div className="form-group">
        <label>Match Date:</label>
        <input
          type="date"
          className="form-control"
          value={matchDate}
          onChange={(e) => setMatchDate(e.target.value)}
        />
        {errors.matchDate && <span className="text-danger">{errors.matchDate}</span>}
      </div>
      <div className="form-group">
        <label>Match Level:</label>
        <input
          type="text"
          className="form-control"
          value={matchLevel}
          onChange={(e) => setMatchLevel(e.target.value)}
        />
        {errors.matchLevel && <span className="text-danger">{errors.matchLevel}</span>}
      </div>
      <div className="form-group">
        <label>Winner Id:</label>
        <input
          type="text"
          className="form-control"
          value={winnerId}
          onChange={(e) => setWinnerId(e.target.value)}
        />
        {errors.winnerId && <span className="text-danger">{errors.winnerId}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Add Match</button>
    </form>
  );
};

export default AddMatch;