import React from "react";
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>APPLEPACK.</div>
        <nav>
          <ul>
            <li>
              <p>discover</p>
            </li>
            <li>
              <p>products</p>
              </li>
            <li className='btn'>
              <p className='btn-order'>order</p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}