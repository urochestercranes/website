import "./Hero.css";

function Hero({ content }) {  

  return (
    <section className="hero">
        <div className={`hero-content`}>
            <h1><i>{ content.title }</i></h1>
            <h2>{ content.subtitle }</h2>
            <p>{ content.info }</p>
        </div>
    </section>
  );
};

export default Hero;