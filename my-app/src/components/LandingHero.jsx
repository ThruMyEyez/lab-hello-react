import logo from "../images/ironhack-logo-xs.png";
import icon0 from "../images/icon1.png";
import icon1 from "../images/icon2.png";
import icon2 from "../images/icon3.png";
import icon3 from "../images/icon4.png";
import menu from "../images/menu-top-xs.png";
import reactBgImage from "../logo.svg";
import "./Hero.scss";

function Hero() {
  return (
    <header className="hero-header">
      <div className="hero-div">
        <nav>
          <img src={logo} className="page-logo" alt="Ironhack Logo" />
          <img src={menu} className="menu-btn" alt="Menu" />
        </nav>

        <div className="hero-main-container">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most pupular frontend library, and become a super Ninja developer.</p>
          <a href="/#">Awesome!</a>
        </div>
      </div>
      <section>
        <article>
          <img src={icon0} className="content-icon" alt="Icon image" />
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article>
          <img src={icon1} className="content-icon" alt="Icon image" />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </article>

        <article>
          <img src={icon2} className="content-icon" alt="Icon image" />
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the component's.</p>
        </article>

        <article>
          <img src={icon3} className="content-icon" alt="Icon image" />
          <h4>JSX</h4>
          <p>Statically-typed,designed to run on modern browsers.</p>
        </article>
      </section>
    </header>
  );
}
// TODO: Set react logo as bg image with half opacity
export default Hero;
/* 
Say hello to ReactJS

You will learn how to use the most pupular frontend library,
and become a super Ninja developer.

Declarative
React makes it painless to create interactive UIs.

Components
Build encapsulated components that manage their state.

Single-Way
A set of immutable values are passed to the component's.

JSX
Statically-typed,
designed to run on modern  browsers.
*/
