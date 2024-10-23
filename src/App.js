import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function App() {
  const sliderContainer = useRef(null);

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(sliderContainer.current.scrollWidth);
    console.log();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Motion Slider</h1>
      </header>
      <div ref={sliderContainer} className="sliderContainer">
        <motion.div
          drag="x"
          dragConstraints={{
            left: width ? -(width - sliderContainer.current.offsetWidth) : "",
            right: 0,
          }}
          className="slider"
        >
          <img
            src="https://images.pexels.com/photos/7958188/pexels-photo-7958188.jpeg"
            alt="slider-image"
          />
          <img
            src="https://images.pexels.com/photos/16631051/pexels-photo-16631051/free-photo-of-close-up-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slider-image"
          />
          <img
            src="https://images.pexels.com/photos/28871575/pexels-photo-28871575/free-photo-of-scenic-view-of-lush-green-landscape-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slider-image"
          />
          <img
            src="https://images.pexels.com/photos/15876211/pexels-photo-15876211/free-photo-of-wallpaper-of-fronds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slider-image"
          />
          <img
            src="https://images.pexels.com/photos/28950862/pexels-photo-28950862/free-photo-of-historic-bell-tower-in-dubrovnik-with-flying-birds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slider-image"
          />
          <img
            src="https://images.pexels.com/photos/27467770/pexels-photo-27467770/free-photo-of-laptop-and-camera-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slider-image"
          />
          <img
            src="https://images.pexels.com/photos/20351329/pexels-photo-20351329/free-photo-of-roses-and-tulips-on-wedding-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slider-image"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
