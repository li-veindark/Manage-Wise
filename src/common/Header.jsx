import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"></img>
      <div>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Features
            </Link>
          </li>
          <FontAwesomeIcon
            className="header-icon"
            icon={faSquare}
            style={{ color: "#c4c6ca", fontSize: "6" }}
          />
          <li>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              duration={1000}
            >
              FAQ
            </Link>
          </li>
          <FontAwesomeIcon
           className="header-icon"
            icon={faSquare}
            style={{ color: "#c4c6ca", fontSize: "6" }}
          />
          <li>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Pricing
            </Link>
          </li>
          <FontAwesomeIcon
           className="header-icon"
            icon={faSquare}
            style={{ color: "#c4c6ca", fontSize: "6" }}
          />
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Testimonials
            </Link>
          </li>
          <button>
            <a href="/"></a>Buy Template
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
