export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Cassandra!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Software Engineer
                        </span>{" "}
                    </h1>
                    <p className="hero--section--description"> Description here. 
                    <br /> More Here.
                    </p>
                </div>
                <button className="btn btn-primary"> Contact Me! </button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero-section-img.png" alt="Hero Section"/>
            </div>
        </section>
    )
}