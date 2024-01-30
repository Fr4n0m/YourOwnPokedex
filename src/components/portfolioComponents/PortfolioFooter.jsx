import "@/styles/portfolio-footer.css";
import "@/styles/portfolio-const.css";
import React from "react";

function PortfolioFooter() {
  return (
    <footer className="bg-[--color-primary]">
      <div className="grid place-items-center grid-cols-3 p-20 footer-container">
        <div class="footer-logo">
          <img src="/assets/images/logo.webp" alt="Fran" />
          <h2>Francisco Rodríguez © 2023</h2>
          <a href="">About me</a>
        </div>

        <div class="info-container">
          <span></span>
          <nav>
            <ul class="more-buttons">
              <li>MORE</li>
              <li>
                <button>
                  <img
                    class="svg-icon"
                    src="/assets/icons/github.svg"
                    alt="GitHub"
                  />
                  <span class="text">GitHub</span>
                </button>
              </li>
              <li>
                <button>
                  <img
                    class="svg-icon"
                    src="/assets/icons/linkedin.svg"
                    alt="LinkeIn"
                  />
                  <span class="text">LinkedIn</span>
                </button>
              </li>
              <li>
                <button>
                  <img
                    class="svg-icon"
                    src="/assets/icons/figma.svg"
                    alt="Figma"
                  />
                  <span class="text">Figma</span>
                </button>
              </li>
              <li>
                <button>
                  <img class="svg-icon" src="/assets/icons/cv.svg" alt="CV" />
                  <span class="text">CV</span>
                </button>
              </li>
              <li>
                <button>
                  <img
                    class="svg-icon"
                    src="/assets/icons/posts.svg"
                    alt="Posts"
                  />
                  <span class="text">Posts</span>
                </button>
              </li>
            </ul>
          </nav>

          <nav>
            <ul class="contacts-buttons">
              <li>CONTACTS</li>
              <span></span>
              <li>
                <button>
                  <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" />
                  <span class="text">WhatsApp</span>
                </button>
              </li>
              <li>
                <button>
                  <img src="/assets/icons/email.svg" alt="Email" />
                  <span class="text">Email</span>
                </button>
              </li>
              <li>
                <button>
                  <img src="/assets/icons/twitter.svg" alt="Twitter" />
                  <span class="text">Twitter</span>
                </button>
              </li>
              <li>
                <button>
                  <img src="/assets/icons/facebook.svg" alt="Facebook" />
                  <span class="text">Facebook</span>
                </button>
              </li>
              <li>
                <button>
                  <img src="/assets/icons/tiktok.svg" alt="TikTok" />
                  <span class="text">TikTok</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div class="tell-me">
          <h1>Tell me about...</h1>
          <div class="input-container">
            <input
              type="text"
              name="text"
              class="input-footer"
              placeholder="write a message"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PortfolioFooter;
