import React from 'react';
import App from '../App';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">contact</Link>
          <Link to="/products">Products</Link>
        </nav>
  )
}

export default Navbar