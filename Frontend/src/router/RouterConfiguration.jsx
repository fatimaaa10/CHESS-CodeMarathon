import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import PlayerWinPercentage from "../products/PlayerWinPercentage";
import AddMatch from "../products/AddMatch";
import TopPlayersWinPercenatge from "../products/TopPlayersWinPercenatge";


const RouterConfiguration = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Players-Win-Percentage" element={<PlayerWinPercentage />} />
          <Route path="/Top-Players" element={<TopPlayersWinPercenatge />} />
          <Route path="/Add-Match" element={<AddMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfiguration;
