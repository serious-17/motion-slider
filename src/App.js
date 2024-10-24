import "./App.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import images from "./images";

function App() {
  const sliderContainer = useRef(null);

  const [width, setWidth] = useState(0);

  const checkWidth = () => {
    setWidth(
      sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Motion Slider</h1>
      </header>
      <motion.div ref={sliderContainer} className="sliderContainer">
        <motion.div
          ref={sliderContainer}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="slider"
        >
          {images.map((image) => (
            <img onLoad={checkWidth} key={image} src={image} alt="" />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
