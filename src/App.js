//import logo from './logo.svg';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';


//the menu shouldn't link to another page, but should instead scroll the view down to see the menu interations.  Come back and check on this later
//this will also need to be styled
export default function App() {
  return (
    <div>
      <h1>React restaurant</h1>
      <nav style={{borderBottom: 'solid 1px', paddingBottom: '1rem',}}>
        <Link to="www.google.com">Home</Link> | {" "}
        <Link to="www.google.com">Menu</Link> | {" "}
        <Link to="www.google.com">Contact</Link> | {" "}
        <Link to="www.google.com">About</Link> | {" "}
      </nav>
      <Outlet />
    </div>
  );
}