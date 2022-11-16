import icon0 from "../images/icon1.png";
import icon1 from "../images/icon2.png";
import icon2 from "../images/icon3.png";
import icon3 from "../images/icon4.png";

function HeroContent() {
  return (
    <section className="hero-content">
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
  );
}

export default HeroContent;
