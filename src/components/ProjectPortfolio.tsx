"use client"

import { useRef, useState, useEffect } from "react"
import { ExternalLink, Github } from "lucide-react"
import PortfolioNavigation from "./PortfolioNavigation.tsx"

// Sample project data - replace with your own
const projects = [
  {
    id: 1,
    title: "Mobile Autonomous Systems Lab Competition",
    description: "4-week robotics competition. Won \"Best Autonomous Design\".",
    image: "./img/SillyBillies.png",
    tags: ["Python", "C/C++", "OpenCV", "ROS2", "Arduino"],
    liveUrl: "https://maslab.mit.edu/2024/wiki/team11",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Optimization of Accelerator Dataflow via Genetic Algorithms",
    description: "Explored performance optimization using evolutionary algorithms.",
    image: "./img/HWML-fig1.png",
    tags: ["Research", "Python", "AI/ML", "Accelerators", "Computer Hardware"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 3,
    title: "Tomato Plant Health Tracker",
    description: "Mask R-CNN based model for tomato plant health and defect tracking.",
    image: "./img/tomato.png",
    tags: ["Python", "OpenCV", "AI/ML", "Research"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 4,
    title: "A fatigue-resistant myoneural actuator for implantable biohybrid systems",
    description: "Co-author. Conducted histological analysis using computer vision.",
    image: "./img/biomech-cellpose.png",
    tags: ["Research", "Python", "Statistical Analysis", "Computer Vision"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 5,
    title: "Smart Closet Tracking App",
    description: "Current project. AI-enabled app to help users generate outfits and shop more consciously.",
    image: "/placeholder.svg?height=400&width=600&text=Fitness+Tracker",
    tags: ["Python", "AI/ML", "LLMs", "React", "Databases"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 6,
    title: "Robotic Pick-and-Place Recyclable Sorter",
    description: "Current project exploring automation of sorting recyclables.",
    image: "/placeholder.svg?height=400&width=600&text=Fitness+Tracker",
    tags: ["In-progress", "CV", "ROS", "Python", "Manipulation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  }
]

export default function ProjectPortfolio() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const totalProjects = projects.length

  // Calculate the angle for each project
  const anglePerProject = 360 / totalProjects

  // Update rotation when active index changes
  useEffect(() => {
    setRotation(-activeIndex * anglePerProject)
  }, [activeIndex, anglePerProject])

  const goToProject = (index: number) => {
    // Handle wrapping around
    let newIndex = index
    if (newIndex < 0) newIndex = totalProjects - 1
    if (newIndex >= totalProjects) newIndex = 0

    setActiveIndex(newIndex)
  }

  const nextProject = () => goToProject(activeIndex + 1)
  const prevProject = () => goToProject(activeIndex - 1)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextProject()
      if (e.key === "ArrowLeft") prevProject()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex])

  return (
    <div
      className="w-full flex flex-col items-center py-12"
      style={{ background: "linear-gradient(to bottom, #909A70, #FEFAE0)"}}
    >
      {/* Navigation Header */}
      <PortfolioNavigation 
      projects={projects} 
      prevProject={prevProject} 
      nextProject={nextProject} 
      goToProject={goToProject}
      activeIndex={activeIndex}
      />

      {/* 3D Carousel Container */}
      <div
        style={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: "1500px",
          perspectiveOrigin: "center center",
          overflow: "visible"
        }}
      >
        <div
          ref={carouselRef}
          style={{
            position: "relative",
            width: "600px",
            height: "400px",
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
            transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            left: "0",
            top: "0",
          }}
        >
          {projects.map((project, index) => {
            // Calculate the angle for this project
            const theta = anglePerProject * index
            // Calculate the z-position to create a circle
            const radius = 500

            return (
              <div
                key={project.id}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "500px",
                  height: "375px",
                  transform: `translate(-50%, -50%) rotateY(${theta}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  opacity: activeIndex === index ? 1 : 0.8,
                  transition: "opacity 0.5s ease",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#CCD5AE",
                    border: "1px solid #909A70",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px #909A70",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#FEFAE0",
                      overflow: "hidden",
                      
                    }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ padding: "16px" }}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        marginTop: "0px",
                        color: "#545E31",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        marginBottom: "12px",
                        color: "#6C783F",
                        fontSize: "14px",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginBottom: "16px",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            backgroundColor: "#909A70",
                            color: "#FEFAE0",
                            border: "1px solid #FEFAE0",
                            borderRadius: "9999px",
                            padding: "2px 8px",
                            fontSize: "11px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          backgroundColor: "#545E31",
                          color: "white",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "500",
                          textDecoration: "none",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#626d37ff"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#545E31"
                        }}
                      >
                        <ExternalLink style={{ width: "12px", height: "12px", marginRight: "4px" }} />
                        More
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          backgroundColor: "transparent",
                          color: "#545E31",
                          border: "1px solid #545E31",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "500",
                          textDecoration: "none",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#909A70"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                        }}
                      >
                        <Github style={{ width: "12px", height: "12px", marginRight: "4px" }} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* BG */}
      <div
        className="w-full h-20 mt-4"
        style={{
          background: "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.2))",
        }}
      ></div>
    </div>
  )
}