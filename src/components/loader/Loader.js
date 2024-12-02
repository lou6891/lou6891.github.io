import React from "react";
import classes from "./loader.module.css";

const Loader = ({ type }) => {
  // Dot Component
  const Dot = () => {
    return (
      <section className={classes.body}>
        <div className={classes.drawing} id="loading">
          <div className={classes.loadingDot}></div>
        </div>
      </section>
    );
  };
// SVGText Component
const SVGText = () => {
    return (
      <section className={classes.svg_body}>
        <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg">
          <text
            x="50%"
            y="38%"
            textAnchor="middle"
            dominantBaseline="middle" 
            className={classes.svg_text}
          >
            <tspan x="50%" dy="0em">Luca</tspan>
            <tspan x="50%" dy="1.5em">Conti</tspan>
          </text>
        </svg>
      </section>
    );
  };
  
  // Conditional Rendering
  if (type === "Dot") {
    return <Dot />;
  } else if (type === "SVGText") {
    return <SVGText />;
  } else {
    return <Dot />;
  }
};

export default Loader;
