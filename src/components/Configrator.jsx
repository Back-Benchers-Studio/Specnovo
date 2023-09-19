import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { Link } from "react-router-dom";
import { state } from "../store";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const transition = { type: "spring", duration: 1.5 };
const config = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.2 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};
function Configrator() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  console.log(location)

  useEffect(() => {
    if (location.pathname === "/config") {
      state.inConfigMode = true;
      state.intro = false;
    }
  }, []);
  const [selectedSquare, setSelectedSquare] = useState(null);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const [selectedleftSquare, setSelectedleftSquare] = useState(null);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleBackClick = (event) => {
    console.log("clicked");
  };

  const handleSquareClick = (id) => {
    setSelectedSquare(id);
  };

  const handleComponenetClick = (id) => {
    setSelectedComponent(id);
  };

  const handleleftSquareClick = (id) => {
    setSelectedleftSquare(id);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };

  return (
    // <div className="grey-container">
    <motion.div {...config} className="blueish-container">
      <div className="centered-text">
        <h1 className="text-content">PC Builder</h1>
      </div>
      <div className="white-container"></div>
      <div className="rightSection-container">
        <div className="vertical-container">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <div className="back-button" onClick={handleBackClick}>
              <div className="back-icon">←</div>
              <div className="back-text">Back</div>
            </div>
          </Link>

          <p className="config-text">Configure the PC</p>

          <div className="selectable-squares">
            <div
              className={`square ${
                selectedSquare === "square1" ? "selected" : ""
              }`}
              onClick={() => handleSquareClick("square1")}
            >
              <div className="icon pc-case">CPU</div>
            </div>
            <div
              className={`square ${
                selectedSquare === "square2" ? "selected" : ""
              }`}
              onClick={() => handleSquareClick("square2")}
            >
              <div className="icon pc-case">GPU</div>
            </div>
            <div
              className={`square ${
                selectedSquare === "square3" ? "selected" : ""
              }`}
              onClick={() => handleSquareClick("square3")}
            >
              <div className="icon pc-case">RAM</div>
            </div>
            <div
              className={`square ${
                selectedSquare === "square4" ? "selected" : ""
              }`}
              onClick={() => handleSquareClick("square4")}
            >
              <div className="icon pc-case">RGB</div>
            </div>
          </div>

          <p className="component-text">{name}</p>

          <div className="selectable-component">
            <div
              className={`component ${
                selectedComponent === "c1" ? "selected" : ""
              }`}
              onClick={() => handleComponenetClick("c1")}
            >
              <div className="icon pc-case">CPU</div>
            </div>
            <div
              className={`component ${
                selectedComponent === "c2" ? "selected" : ""
              }`}
              onClick={() => handleComponenetClick("c2")}
            >
              <div className="icon pc-case">GPU</div>
            </div>
            <div
              className={`component ${
                selectedComponent === "c3" ? "selected" : ""
              }`}
              onClick={() => handleComponenetClick("c3")}
            >
              <div className="icon pc-case">RAM</div>
            </div>
            <div
              className={`component ${
                selectedComponent === "c4" ? "selected" : ""
              }`}
              onClick={() => handleComponenetClick("c4")}
            >
              <div className="icon pc-case">RGB</div>
            </div>
          </div>
        </div>
      </div>

      <div className="leftSection-container">
        <div className="vertical-container">
          <div
            className={`leftsquare ${
              selectedleftSquare === "leftsquare1" ? "selected" : ""
            }`}
            onClick={() => handleleftSquareClick("leftsquare1")}
          >
            <div className="icon pc-case"></div>
          </div>
          <div
            className={`leftsquare ${
              selectedleftSquare === "leftsquare2" ? "selected" : ""
            }`}
            onClick={() => handleleftSquareClick("leftsquare2")}
          >
            <div className="icon pc-case"></div>
          </div>
        </div>
      </div>

      <div className="price-container">
        <div>
          <div className="price-text">Price</div>
          <div className="price-value">${price}</div>
        </div>
        <button
          className={`add-to-cart-button ${isButtonClicked ? "clicked" : ""}`}
          onClick={handleButtonClick}
        >
          + Add to Cart
        </button>
      </div>
    </motion.div>
    // </div>
  );
}

export default Configrator;
