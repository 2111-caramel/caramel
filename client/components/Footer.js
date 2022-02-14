import React from "react";
import { Link } from "react-router-dom";
import Sources from "./Sources"
import Team from "./Team"

/**
 * COMPONENT
 */
export default function Footer() {
  return (
    <div className="container justify-content-end mt-3" align="center">
      <div className="row justify-content-center mb-3" style={{ fontSize: 11 }}>
          <div>
        <a
          data-bs-toggle="offcanvas"
          href="#sources"
          aria-controls="offcanvasExample"
          style={{ display: "inline" }}
        >
          Data Sources{" "}
        </a>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="sources"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Data Sources</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body"><Sources/></div>
        </div>|

         <a
          data-bs-toggle="offcanvas"
          href="#team"
          aria-controls="offcanvasExample"
          style={{ display: "inline" }}
        >
           {" "}Meet the Team
        </a>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="team"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Meet the Team</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body"><Team/></div>
        </div>
        </div>
      </div>
    </div>
  );
}
