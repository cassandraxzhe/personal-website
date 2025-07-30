import ExperienceCard from "../../components/ExperienceCard";


export default function MyExperience() {

    const Experiences = [
        {
            id: 1,
            title: "Software Development Co-Op",
            description: "TODO",
            tags: ["Python", "AI/ML"],
            start_date: "TODO",
            end_date: "TODO",
            location: "TODO",
            image: "/TODO"
        },
        {
            id: 2,
            title: "TODO",
            description: "TODO",
            tags: ["TODO"],
            start_date: "TODO",
            end_date: "TODO",
            location: "TODO",
            image: "/TODO"
        }
    ]

    return (
        <div style={{marginLeft: '10%', marginRight: '10%'}}>
            <h2
                className="text-3xl font-bold text-white"
                style={{
                    color: "#909A70",
                    fontSize: 36
                }}
            >Experience</h2>
            {/* TODO: DRY THIS OUT*/}
            <div
                style={{
                    // display: "flex",
                    alignItems: "center"
                }}
            >
                <ExperienceCard title="SDE Co-Op" company="Amazon Robotics" description="TODO" tags={["Python", "AI/ML"]}></ExperienceCard>
                <ExperienceCard title="Research Scientist" company="MIT Biomechatronics Group" description="TODO" tags={["Research"]}></ExperienceCard>
            </div>
            
        </div>
    )
}