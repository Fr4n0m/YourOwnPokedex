import "@/styles/portfolio-const.css";
import "@/styles/portfolio-header.css";
import "@/styles/portfolio-first-section.css";
import React from "react";

function PortfolioHeader() {
  return (
    <div>
      <header id="header" class="header">
        <img src="/assets/images/logo.webp" alt="Fran" />

        <ul>
          <a class="header-nav-link" href="">
            <li>
              <span class="top-key"></span>
              <span class="text">Work</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </li>
          </a>
          <a class="header-nav-link" href="">
            <li>
              <span class="top-key"></span>
              <span class="text">About</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </li>
          </a>
          <a class="header-nav-link" href="">
            <li>
              <span class="top-key"></span>
              <span class="text">Notes</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </li>
          </a>
          <a class="header-nav-link" href="">
            <li>
              <span class="top-key"></span>
              <span class="text">Contact</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </li>
          </a>
        </ul>

        <input
          class="input"
          type="text"
          autocomplete="off"
          name="text"
          placeholder="Search"
        />
      </header>

      <div class="background">
        <img src="/assets/images/background.webp" alt="Fran"></img>
        <div class="text">
          <h2>Hey! I'm Fran</h2>
          <h3>a full stack developer and web designer student in CodeSpace</h3>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHeader;
