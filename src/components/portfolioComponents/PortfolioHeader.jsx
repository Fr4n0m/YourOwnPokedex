import "@/styles/portfolio-const.css";
import "@/styles/portfolio-header.css";
import "@/styles/portfolio-first-section.css";
import React from "react";

function PortfolioHeader() {
  return (
    <div className="bg-[#281844]">
      <header
        id="header"
        className="header absolute w-full flex bg-transparent items-center justify-center"
      >
        <img
          src="/assets/images/logo.webp"
          alt="Fran"
          className="w-[100px] h-[100px] rounded-[50%] p-[20px]"
        />

        <ul className="flex items-center">
          <a
            className="header-nav-link bg-transparent border-[2px] border-solid border-[#fff] cursor-pointer inline-block tracking-wider outline-none overflow-visible p-3 relative text-center transition-all duration-[0.3s] ease-in-out select-none text-[13px]"
            href=""
          >
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
