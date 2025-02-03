/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Sketch from "sketch-js";

import Footer from "./components/Footer";
import AboutModal from "./components/AboutModal";
import getRandomColor from "./components/Colors";
import Menu from "./components/Menu";

import logo from "/src/assets/img/logo.png";
import logoWhite from "/src/assets/img/logo-white.png";

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
        const newColor = getRandomColor(randomColor);
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
        const newColor = getRandomColor(randomColor);
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 pointer-events-none text-center">
            <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold mb-5">
              Hi, I'm Yash!
            </h1>
            <h2 className="text-lg md:text-2xl 2xl:text-3xl font-bold">
              Open Source | Developer Relations | Web3
            </h2>
          </div>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div id="background-content" className="w-full h-full"></div>
          </div>
        </div>
        <Menu
          menuActive={menuActive}
          toggleMenu={toggleMenu}
          toggleAboutModal={toggleAboutModal}
          logo={logoWhite}
        />
        
      </div>
      <Footer mode="dark" />

      <AboutModal
        aboutModalOpen={aboutModalOpen}
        toggleAboutModal={toggleAboutModal}
      />
    </>
  );
}

export default App;
