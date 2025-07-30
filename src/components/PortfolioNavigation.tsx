import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"


export default function PortfolioNavigation({projects, prevProject, nextProject, goToProject, activeIndex}) {
    return (
        <div
                className="w-full max-w-6xl mx-auto px-4 mb-8"
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 10,
                marginLeft: '10%',
                marginRight: '10%'
                }}
            >
                <h2 
                    className="text-3xl font-bold text-white"
                    style={{
                        color: "#545E31",
                        fontSize: 36
                    }}
                >
                    Projects & Research
                </h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                    onClick={prevProject}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#374151",
                    border: "1px solid #4b5563",
                    borderRadius: "6px",
                    color: "white",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#6C783F"
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#545E31"
                    }}
                    aria-label="Previous project"
                >
                    <ArrowLeft style={{ width: "16px", height: "16px" }} />
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToProject(index)}
                        style={{
                        width: activeIndex === index ? "20px" : "10px",
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: activeIndex === index ? "#E9EDC9" : "#545E31",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        }}
                        aria-label={`Go to project ${index + 1}`}
                    />
                    ))}
                </div>

                <button
                    onClick={nextProject}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#545E31",
                    border: "1px solid #6C783F",
                    borderRadius: "6px",
                    color: "white",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#6C783F"
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#545E31"
                    }}
                    aria-label="Next project"
                >
                    <ArrowRight style={{ width: "16px", height: "16px" }} />
                </button>
            </div>
        </div>
    )
}