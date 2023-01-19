import React from "react";
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>BACKPACK.</div>
        <nav>
          <ul>
            <li><a href='/'>discover</a></li>
            <li><a href='/'>products</a></li>
            <li className='btn'><a className='btn-order'>order</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}