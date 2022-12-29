import React from "react";
import Dashboard from "./Dashboard";
import "../styles.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className='panel'>
      <div className='header'>
        <Header />
      </div>
      <div className='dashboard'>
        <Dashboard />
      </div>
    </div>
  ); 
};

export default Home;