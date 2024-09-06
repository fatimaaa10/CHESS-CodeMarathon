import React from "react";
import chesspfp from "../assets/chess.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
      <div>
          <h1 className="text-center">Chess League</h1>
        </div>
        <img
          src= {chesspfp}
          style={{ width: "100%" }}
          alt="Chess League Logo"
        />
        
      </div>
    </>
  );
};

export default Home;
