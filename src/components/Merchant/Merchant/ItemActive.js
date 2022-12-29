import React from 'react'
import "../styles.css";
import Header from './header/Header';

const ItemActive = () => {
  return (
    <div className='panel'>
    <div className='header'>
      <Header />
    </div>
    <div className='dashboard'>ItemActive</div>
  </div>
  )
}

export default ItemActive