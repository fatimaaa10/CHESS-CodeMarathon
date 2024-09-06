import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard'; 
import { getplayerWinPercentage } from '../services/productApiService'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const PlayerWinPercentage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getplayerWinPercentageHandler();
  }, []);

  async function getplayerWinPercentageHandler() {
    let data = await getplayerWinPercentage();
    if (data != null) {
      setPlayers(data);
    }
    console.log(players);
  }

  const displayProducts = () => {
    return Array.isArray(players) && players.length > 0 ? (
      players.map((player) => (
        <PlayerCard key={player.fullName} player={player} className="card mb-3" />
      ))
    ) : (
      <h1 className="text-center">No Players Found</h1>
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {displayProducts()}
      </div>
    </div>
  );
};

export default PlayerWinPercentage;