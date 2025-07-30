import ExperienceCard from "../../components/ExperienceCard";


export default function MyExperience() {

    const Experiences = [
        {
            id: 1,
            title: "Software Development Co-Op",
            company: "Amazon Robotics",
            description: [
                "Created a software package to visualize the output of a robotic system’s detection models: used as a visual tool for demos",
                "Designed and executed a suite of experiments to benchmark capabilities of a computer-vision-based barcode reading system, conducted analysis on results to determine optimal setup and make recommendations to potential customers",
                "Experimented with the use of image preprocessing techniques like image stacking and using generative adversarial networks for long-distance barcode reading, successfully increased existing reading range by over 20% in sub-optimal conditions",
                "Designed and created a computer vision-based system for object tracking and inventory in warehouses",
                "Trained and fine-tuned a detection model using custom dataset, used for package detection",
                "Integrated tactile sensors onto a dextrous hand and created a visualization tool for the sensors using ROS2 and TkInter"
            ],
            tags: ["Python", "JS", "AI/ML", "OpenCV", "PyTorch", "ROS", "TkInter", "Agile"],
            start_date: "August 2024",
            end_date: "January 2025",
            location: "Westborough, MA",
            image: "/TODO"
        },
        {
            id: 2,
            title: "Research Scientist",
            company: "MIT Biomechatronics Group",
            description: [
                "Exploring use of artificial stimulation techniques to actuate existing neuromusculature for motion restoration",
                "Designing software for analysis of experimental data; implemented pulse-width, frequency, and amplitude modulation protocols",
                "Fine tuned a pose estimation model using experimental data and conducted data analysis to determine comfort in swine models with a prototypical implant design", 
                "Found a certain treatment had significant impact through analyzing nerve axon diameter using computer vision techniques"
            ],
            tags: ["Research", "Python", "Computer Vision", "Statistical Analysis", "Fine-Tuning"],
            start_date: "TODO",
            end_date: "TODO",
            location: "TODO",
            image: "/TODO"
        },
        {
            id: 3,
            title: "Undergraduate Student Researcher",
            company: "HCI Engineering Group",
            description: [
                "Built an augmented reality (AR) platform for learning maker skills, using Unity (with C#) and Hololens",
                "Researched applications of reflective learning using AR such as teaching, architecture, and the creative design process", 
                "Created UI for the learning platform, built custom tools with sensors and Arduino, programmed scenarios with Unity for Hololens"
            ],
            tags: ["Embedded", "Python", "Arduino", "Research", "Unity", "AR/VR"],
            start_date: "TODO",
            end_date: "TODO",
            location: "TODO",
            image: "/TODO"
        }
    ]

    return (
        <div id="myExperience" style={{marginLeft: '10%', marginRight: '10%'}}>
            <h2
                className="text-3xl font-bold text-white"
                style={{
                    color: "#909A70",
                    fontSize: 36
                }}
            >Experience</h2>
            <div
                style={{
                    // display: "flex",
                    alignItems: "center"
                }}
            >
                {Experiences.map((experience) => (
                    <ExperienceCard
                        title={experience.title}
                        company={experience.company}
                        description={experience.description}
                        tags={experience.tags}
                    ></ExperienceCard>
                ))}
            </div>
            
        </div>
    )
}