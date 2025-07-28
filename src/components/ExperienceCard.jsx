

export default function ExperienceCard({title, company, loc, date, description}) {
    return (
        <div className="Experience-Card">
            <h2>{company}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}