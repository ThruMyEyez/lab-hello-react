import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";
import "./Hero.scss";

function Hero() {
  return (
    <header className="hero-header">
      <nav>
        <img src={logo} className="page-logo" alt="Ironhack Logo" />
        <img src={menu} className="menu-btn" alt="Menu" />
      </nav>
      {/* this canvas css construct is for learning sass functions with svg*/}
      <div className="bg-canvas">
        <div className="bg-logo1"></div>
        <div className="bg-logo2"></div>
        <div className="bg-logo3"></div>
        <div className="bg-logo4"></div>
        <div className="bg-logo5"></div>
        <div className="bg-logo6"></div>
      </div>

      <div className="hero-header-content">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most pupular frontend library, and become a super Ninja developer.</p>
        <a href="/#">Awesome!</a>
      </div>
    </header>
  );
}

export default Hero;
