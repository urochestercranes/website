import "./Hero.css";

function Hero({ content }) {  

  return (
    <section className="hero" style={{ backgroundImage: `url(${content.bgImgURL})`, height: content.bgHeight}}>
        <div className="hero-overlay">  {/* dims the image for readability */}
            <div className={`hero-content`}>
                <h1><i>{ content.title }</i></h1>
                <h2>{ content.subtitle }</h2>
                <p>{ content.info }</p>
                </div>
        </div>
    </section>
  );
};

export default Hero;