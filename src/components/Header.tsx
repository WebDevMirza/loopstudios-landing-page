import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";
import { ChangeEventHandler, useEffect, useState } from "react";

const Header = () => {
  const [mobileNav, setmobileNav] = useState(false);

  const btnChecked: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked ? setmobileNav(true) : setmobileNav(false);
  };

  useEffect(() => {
    if (mobileNav) {
      document.getElementsByTagName("body")[0].classList.add("bg-nav");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("bg-nav");
    }
  }, [mobileNav]);

  return (
    <>
      <div className="bg-header">
        <div className="wrapper">
          <div className="header">
            <div className="header-menu">
              <div className="logo">
                <img src={Logo} alt="loopstudios" />
              </div>

              <label className="toggle-handle" htmlFor="mobile-toggle">
                <input
                  onChange={btnChecked}
                  className="mobile-toggle"
                  type="checkbox"
                  name="mobile-toggle"
                  id="mobile-toggle"
                />
              </label>

              <nav className={mobileNav ? "nav-mobile" : "nav-close"}>
                <div className="nav-logo">
                  <img src={Logo} alt="loopstudios" />
                </div>

                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </nav>

              <nav className="nav-desktop">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-hero">
              <h1>Immersive experiences that deliver</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
