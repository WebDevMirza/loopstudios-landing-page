import "../assets/styles/footer.css";
import Logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-footer v-gap">
        <div className="wrapper">
          <div className="footer">
            <div className="footer-nav">
              <div className="footer-logo">
                <img src={Logo} alt="loopstudios" />
              </div>
              <nav>
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

            <div className="footer-social">
              <div className="social">
                <a href="#" aria-label="facebook">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a href="#" aria-label="twitter">
                  <img src={Twitter} alt="twitter" />
                </a>
                <a href="#" aria-label="pinterest">
                  <img src={Pinterest} alt="pinterest" />
                </a>
                <a href="#" aria-label="instagram">
                  <img src={Instagram} alt="instagram" />
                </a>
              </div>
              <p className="copyright">@ 2023 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
