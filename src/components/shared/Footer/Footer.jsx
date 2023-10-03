import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="p-10 bg-base-200 text-base-content mt-20">
      <div className="footer max-w-screen-xl mx-auto">
        <aside>
          <img className="w-14" src={logo} alt="logo" />
          <p>
            <span className="text-xl font-semibold">TripAero Service Ltd.</span>
            <br />
            Providing reliable trip service since 2023
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a to={"aero-services"} className="link link-hover">
            Offer
          </a>
          <Link to={"aero-services"} className="link link-hover">
            Service
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to={"/about-us"} className="link link-hover">
            About us
          </Link>
          <Link to={"/contact-us"} className="link link-hover">
            Contact us
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link to={"aero-services"} className="link link-hover">
            Terms of use
          </Link>
          <Link to={"aero-services"} className="link link-hover">
            Privacy policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
