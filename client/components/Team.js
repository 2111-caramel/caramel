import React from "react";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export default function Team() {
  return (
      <div className="container mt-3" align="left" style={{ fontSize: 13 }}>
        <div className="row mb-3">
          <h5>Montensia Banks</h5>
          <p><a href="https://www.linkedin.com/in/montensia/" target="_blank">LinkedIn</a> | <a href="https://github.com/monteecode" target="_blank">GitHub</a></p>
        </div>

        <div className="row mb-3">
          <h5>Kimberly Chua</h5>
          <p><a href="https://www.linkedin.com/in/chua-kimberly/" target="_blank">LinkedIn</a> | <a href="https://github.com/kchua123" target="_blank">GitHub</a></p>
        </div>

        <div className="row mb-3">
          <h5>Gal Gir</h5>
          <p><a href="https://www.linkedin.com/in/gal-l-gir/" target="_blank">LinkedIn</a> | <a href="https://github.com/Galilior" target="_blank">GitHub</a></p>
        </div>

        <div className="row mb-3">
          <h5>Sandra Magnúsdóttir</h5>
          <p><a href="https://www.linkedin.com/in/sandra-magnusdottir/" target="_blank">LinkedIn</a> | <a href="https://github.com/sandrakristrun" target="_blank">GitHub</a></p>
        </div>
      </div>
  );
}
