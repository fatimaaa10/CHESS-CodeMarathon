import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Player Name: {player.fullName}</h5>
        <p className="card-text">Total Matches Won: {player.totalMatchesWon}</p>
        <p className="card-text">Win Percentage: {player.winPercentage.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default PlayerCard;