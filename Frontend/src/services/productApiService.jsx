import axios from "axios";
//const URL = `http://localhost:5049/api/Chess/`;

async function addMatch(match) {
  let data = null;

  try {
    let response = await axios.post("http://localhost:5049/api/Chess/AddMatch", match);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

async function getplayerWinPercentage() {
    let data = null;
  
    try {
      let response = await axios.get("http://localhost:5049/api/Chess/GetPlayerWinPercentage");
      if (response.status == 200) {
        data = await response.data;
        console.log(data);
      }
    } catch (error) {
      return JSON.stringify(error);
    }
    return data;
  }

  async function getplayerWinPercentageByAverage() {
    let data = null;
  
    try {
      let response = await axios.get("http://localhost:5049/api/Chess/GetPlayerWinPercentageByAverageOfWins");
      if (response.status == 200) {
        data = await response.data;
        console.log(data);
      }
    } catch (error) {
      return JSON.stringify(error);
    }
    return data;
  }

export { getplayerWinPercentage,addMatch,getplayerWinPercentageByAverage};
