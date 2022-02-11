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
          <p>LinkedIn | GitHub</p>
        </div>

        <div className="row mb-3">
          <h5>Kimberly Chua</h5>
          <p>LinkedIn | GitHub</p>
        </div>

        <div className="row mb-3">
          <h5>Gal Gir</h5>
          <p>LinkedIn | GitHub</p>
        </div>

        <div className="row mb-3">
          <h5>Sandra Magnúsdóttir</h5>
          <p>LinkedIn | GitHub</p>
        </div>
      </div>
  );
}
