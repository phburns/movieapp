import React from 'react';
import '../styles.css';

export default function Header() {
  return (
    <header className="header">
        <img className='logo' src='logo.png' alt='Moviedux logo'/>
        <h2 className='app-subtitle'>It's time for popcorn!</h2>
    </header>
  );
}