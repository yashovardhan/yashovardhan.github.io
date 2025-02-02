/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Sketch from "sketch-js";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

import logo from "/src/assets/img/logo.png";
import logoWhite from "/src/assets/img/logo-white.png";
import AboutModal from "./components/AboutModal";
import getRandomColor from "./components/Colors";

const backgroundColor = getRandomColor();

function App() {
  const [randomColor, setRandomColor] = useState(
    getRandomColor(backgroundColor)
  );
  const [menuActive, setMenuActive] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  useEffect(() => {
    const sketch = Sketch.create({
      container: document.getElementById("background-content"),
      autoclear: false,
      retina: "auto",
      mouseover: function () {
        const newColor = getRandomColor(backgroundColor);
        this.fillStyle = newColor;
        this.strokeStyle = newColor;
        setRandomColor(newColor);
      },
      touchmove: function () {
        for (let i = this.touches.length - 1; i >= 0; i--) {
          const touch = this.touches[i];
          this.beginPath();
          this.lineCap = "round";
          this.lineJoin = "round";
          this.lineWidth = 200;
          this.moveTo(touch.ox, touch.oy);
          this.lineTo(touch.x, touch.y);
          this.stroke();
        }
      },
      touchstart: function () {
        const newColor = getRandomColor(backgroundColor);
        this.fillStyle = newColor;
        this.strokeStyle = newColor;
        setRandomColor(newColor);
      },
    });

    // Set initial params
    sketch.fillStyle = randomColor;
    sketch.strokeStyle = randomColor;

    return () => {
      sketch.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  function toggleAboutModal() {
    setAboutModalOpen(!aboutModalOpen);
  }

  return (
    <>
      <div className="relative h-full w-full" style={{ backgroundColor }}>
        <header className="fixed z-10 w-full p-8 pointer-events-none">
          <div className="text-left align-middle pointer-events-none">
            <a
              href="https://yashovardhan.dev"
              className="block w-[20vh] h-auto"
            >
              <img className="w-full h-auto" src={logo} alt="yash" />
            </a>
          </div>
        </header>
        <div className="table h-full w-full absolute">
          <div className="table-cell align-middle text-center relative z-10 pointer-events-none">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold mb-5">
                Hi, I'm Yash!
              </h1>
              <h2 className="text-lg md:text-2xl 2xl:text-3xl font-bold">
                Open Source | Developer Relations | Web3
              </h2>
            </div>
          </div>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div id="background-content" className="w-full h-full"></div>
          </div>
        </div>
        <div className={`menuButton ${menuActive ? "active" : ""}`}>
          <button className="menuTgl" type="button" onClick={toggleMenu}>
            <span></span>
          </button>
          <div className="menu z-[199] relative w-screen h-screen bg-black/90 transition-all duration-500 ease-in-out [clip-path:circle(30px_at_calc(100%_-_65px)_65px)] invisible">
            <div className="fixed z-[9] p-[30px] table w-full pointer-events-none">
              <div className="text-left">
                <a
                  href="https://yashovardhan.dev"
                  className="block w-[20vh] h-auto opacity-70 hover:opacity-100"
                >
                  <img className="w-full h-auto" src={logoWhite} alt="yash" />
                </a>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col items-center justify-center">
              <a
                className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
                onClick={() => {
                  toggleAboutModal();
                  toggleMenu();
                }}
              >
                <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
                  About
                </h1>
              </a>
              <a
                href="https://devrel.page/"
                className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
                onClick={toggleMenu}
              >
                <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl  font-bold opacity-80 hover:opacity-100">
                  DevRel.Page
                </h1>
              </a>
              <a
                href="https://medium.com/@yashovardhana"
                className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
                onClick={toggleMenu}
              >
                <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl  font-bold opacity-80 hover:opacity-100">
                  Blog
                </h1>
              </a>
              <a
                href="mailto:connect@yashovardhan.dev"
                target="_blank"
                className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
                onClick={toggleMenu}
              >
                <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl  font-bold opacity-80 hover:opacity-100">
                  Let's Connect!
                </h1>
              </a>
            </div>
            <div className="fixed bottom-3 w-full text-center z-50">
              <a
                href="https://twitter.com/yashovardhan"
                target="_blank"
                className="opacity-70 hover:opacity-100 text-white px-2.5 py-1.5 inline-block text-lg"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://github.com/yashovardhan"
                target="_blank"
                className="opacity-70 hover:opacity-100 text-white px-2.5 py-1.5 inline-block text-lg"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/yashovardhanagrawal/"
                target="_blank"
                className="opacity-70 hover:opacity-100 text-white px-2.5 py-1.5 inline-block text-lg"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://medium.com/@yashovardhana"
                target="_blank"
                className="opacity-70 hover:opacity-100 text-white px-2.5 py-1.5 inline-block text-lg"
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
              <a
                href="mailto:yashovardhan.agrawal@gmail.com"
                target="_blank"
                className="opacity-70 hover:opacity-100 text-white px-2.5 py-1.5 inline-block text-lg"
              >
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </a>
            </div>
          </div>
        </div>
        <footer>
          <div className="fixed bottom-3 w-full text-center z-50">
            <a
              href="https://twitter.com/yashovardhan"
              target="_blank"
              className="opacity-50 hover:opacity-100 text-[#2f2e40] px-2.5 py-1.5 inline-block text-lg"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://github.com/yashovardhan"
              target="_blank"
              className="opacity-50 hover:opacity-100 text-[#2f2e40] px-2.5 py-1.5 inline-block text-lg"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/yashovardhanagrawal/"
              target="_blank"
              className="opacity-50 hover:opacity-100 text-[#2f2e40] px-2.5 py-1.5 inline-block text-lg"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://medium.com/@yashovardhana"
              target="_blank"
              className="opacity-50 hover:opacity-100 text-[#2f2e40] px-2.5 py-1.5 inline-block text-lg"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a
              href="mailto:yashovardhan.agrawal@gmail.com"
              target="_blank"
              className="opacity-50 hover:opacity-100 text-[#2f2e40] px-2.5 py-1.5 inline-block text-lg"
            >
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </a>
          </div>
        </footer>
      </div>

      <AboutModal
        aboutModalOpen={aboutModalOpen}
        toggleAboutModal={toggleAboutModal}
      />
    </>
  );
}

export default App;
