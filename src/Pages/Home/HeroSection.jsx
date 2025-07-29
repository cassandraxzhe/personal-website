import { Mail } from "lucide-react"

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section" style={{background: "#909A70"}}>
            <div className="hero--section--img" style={{display: "flex", justifyContent: "center"}}>
                <img src="./img/hero-section-img.png" alt="Hero Section"/>
            </div>
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title" style={{textAlign:"center"}}>Hey, I'm Cassandra!</p>
                    <h1 className="hero--section--title" style={{marginLeft: '20%', marginRight: '20%', textAlign: "center"}}>
                        <span className="hero--section--title--color">
                            MEng Student & Software Engineer
                        </span>{" "}
                    </h1>
                    <p className="hero--section--description" style={{marginLeft: '20%', marginRight: '20%', textAlign: "center"}}> 
                        I'm a Computer Science and Engineering student at MIT, currently pursuing my MEng with a focus on Artificial Intelligence. My passion lies at the intersection of software, robotics, and human-centered research.
                    <br />
                    <br />Over the past few years, I’ve worked on everything from developing real-time robotic vision systems at Amazon Robotics to co-authoring research on biohybrid neural actuators at the MIT Media Lab. Whether I’m training detection models, analyzing swine behavior data, or optimizing hardware accelerators with genetic algorithms, I love solving complex problems with a blend of rigorous experimentation and creative thinking.
                    <br />
                    <br />My experiences span academic research, industry co-ops, and autonomous robotics competitions. I thrive in interdisciplinary teams and enjoy working on systems that bridge theory and real-world impact—especially in AI, computer vision, and neuroscience-driven applications.
                    <br />
                    <br />Outside of the office, you’ll find me fencing for the MIT varsity team, mentoring young engineers, or getting overly enthusiastic about Formula 1 and the UFC.
                    <br />
                    <br />I’m always open to collaboration or connecting over shared interests—especially in AI research, robotics, or computational neuroscience. Feel free to reach out!
                    <br />
                    </p>
                </div>
                <div
                    style={{
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center"
                    }}
                >
                    <a
                        href="Contact me!"//TODO: Contact link
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "block",
                            // width: '20%',
                            textAlign: "center",
                            // justifyContent: "center",
                            textJustify: "center",
                            backgroundColor: "#545E31",
                            color: "white",
                            padding: "3px 6px",
                            borderRadius: "6px",
                            fontSize: "16px",
                            fontWeight: "500",
                            textDecoration: "none",
                            transition: "background-color 0.2s",
                            height: 32,
                            marginLeft: '45%',
                            marginRight: '45%',
                            alignContent: "center",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#626d37ff"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#545E31"
                        }}
                        >
                        <Mail style={{ width: "16px", height: "16px", marginRight: "4px"}} />
                         Contact Me!
                    </a>
                </div>
                
                {/* <></> */}
            </div>
        </section>
    )
}