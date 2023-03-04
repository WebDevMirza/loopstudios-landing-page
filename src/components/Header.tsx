import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <div className="bg-header">
        <div className="wrapper">
          <div className="header">
            <div className="header-menu">
              <div className="logo">
                <img
                  src={Logo}
                  alt="loopstudios"
                />
              </div>

              <label htmlFor="mobile-toggle">
                <input
                  className="mobile-toggle"
                  type="checkbox"
                  name="mobile-toggle"
                  id="mobile-toggle"
                />
              </label>

              <nav className="nav-mobile">
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
