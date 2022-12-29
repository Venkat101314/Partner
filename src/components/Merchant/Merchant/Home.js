import React from "react";
import Dashboard from "./dashboard/Dashboard";
import "../styles.css";
import Header from "./header/Header";

const Home = () => {
  return (
    <div className='panel'>
      <div>
        <Header />
      </div>
      <div className='dashboard'>
        <Dashboard />
      </div>
    </div>
  ); 
};

export default Home;