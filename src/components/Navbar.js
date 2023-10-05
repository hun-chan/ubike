import React from "react";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/ubike_logo.svg";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="nav-container">
      <header
        className={
          isNavExpanded ? "navigation expanded" : "navigation"
        }    
      >
        <a href="/" className="logo">
          <img src={logo} alt="ubike logo"/>
        </a>
        
        <button
          className="menu-toggle"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={isNavExpanded?{"display":"none"}:{}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="#B5CC22"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={isNavExpanded?{}:{"display":"none"}}>
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B5CC22"/>
          </svg>
        </button>

        <nav
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/">使用說明</a>
            </li>
            <li>
              <a href="/">收費方式</a>
            </li>
            <li>
              <a href="/search">站點資訊</a>
            </li>
            <li>
              <a href="/">最新消息</a>
            </li>
            <li>
              <a href="/">活動專區</a>
            </li>
          </ul>
        </nav>
        <a href="/" className="login-toggle">登入</a>
      </header>
    </div>
  );
}
