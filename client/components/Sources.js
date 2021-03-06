import React from "react";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export default function Sources() {
  return (
    <div className="container mt-3" align="left" style={{ fontSize: 13 }}>
      <div className="row mb-3">
        <h5>
          <a href="https://www.numbeo.com/" target="_blank">
            Numbeo
          </a>
        </h5>
        <p>Data: Cost of living, environment, healthcare, and transportation</p>
        <p>
          Numbeo is the world’s largest cost of living database. Numbeo is also
          a crowd-sourced global database of quality of life informations
          including housing indicators, perceived crime rates, and quality of
          healthcare, among many other statistics.
        </p>
      </div>
      <div className="row mb-3">
        <h5>
          <a href="https://www.worldweatheronline.com/" target="_blank">
            World Weather Online
          </a>
        </h5>
        <p>Data: Weather</p>
      <p>World Weather Online is dedicated to providing global weather forecast and weather content for websites, businesses and the travel industry.</p>
    </div>
    <div className="row mb-3">
      <h5><a href="https://teleport.org/" target="_blank">Teleport</a></h5>
        <p>Images: City photos</p>
      <p>Teleport builds software to move you to the best place to live and work.</p>
    </div>
    <div className="row mb-3">
      <h5><a href="https://wallpaperaccess.com/" target="_blank">WallpaperAccess</a></h5>
        <p>Image: Homepage background image</p>
      <p>WallpaperAccess brings you thousands of high quality images to be used as wallpaper for your computer, tablet or phone.</p>
    </div>

    </div>
  );
}
