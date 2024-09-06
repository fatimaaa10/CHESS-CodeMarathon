import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard'; 
import { getplayerWinPercentageByAverage } from '../services/productApiService'; 
import './TopPlayerWinPercentageStyle.css';

const PlayerWinPercentage = () => {
    const [players, setPlayers] = useState([]);
  
    useEffect(() => {
      getplayerWinPercentageByAverageHandler();
    }, []);
  
    async function getplayerWinPercentageByAverageHandler() {
      let data = await getplayerWinPercentageByAverage();
      if (data != null) {
        setPlayers(data);
      }
      console.log(players);
    }
  
    const displayProducts = () => {
      return Array.isArray(players) && players.length > 0 ? (
        players.map((player) => (
          <PlayerCard key={player.fullName} player={player} className="player-card" />
        ))
      ) : (
        <h1>No Players Found</h1>
      );
    };
  
    return (
      <div className="container mt-5">
        {displayProducts()}
      </div>
    );
  };
  
  export default PlayerWinPercentage;