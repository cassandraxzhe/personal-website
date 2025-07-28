export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--img">
                <img src="./img/hero-section-img.png" alt="Hero Section"/>
            </div>
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Cassandra!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            MEng Student  |  Software Engineer
                        </span>{" "}
                    </h1>
                    <p className="hero--section--description"> 
                        I'm a Computer Science and Engineering student at MIT, currently pursuing my MEng with a focus on Artificial Intelligence. My passion lies at the intersection of software, robotics, and human-centered research.

                    <br />Over the past few years, I’ve worked on everything from developing real-time robotic vision systems at Amazon Robotics to co-authoring research on biohybrid neural actuators at the MIT Media Lab. Whether I’m training detection models, analyzing swine behavior data, or optimizing hardware accelerators with genetic algorithms, I love solving complex problems with a blend of rigorous experimentation and creative thinking.

                    <br />My experiences span academic research, industry co-ops, and autonomous robotics competitions. I thrive in interdisciplinary teams and enjoy working on systems that bridge theory and real-world impact—especially in AI, computer vision, and neuroscience-driven applications.

                    <br />Outside of the office, you’ll find me fencing for the MIT varsity team, mentoring young engineers, or getting overly enthusiastic about Formula 1 and the UFC.

                    <br />I’m always open to collaboration or connecting over shared interests—especially in AI research, robotics, or computational neuroscience. Feel free to reach out!
                    </p>
                </div>
                <button className="btn btn-primary"> Contact Me! </button>
            </div>
        </section>
    )
}