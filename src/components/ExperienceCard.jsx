

export default function ExperienceCard({title, company, loc, date, description, tags}) {
    return (
        <div 
            className="experience--card--container"
            style={{
                padding: "12px"
            }}
        >
            <div 
                className="experience--card" 
                style={{
                    paddingRight: '16px', 
                    paddingLeft: '16px',
                    paddingBottom: '16px',
                    marginLeft: '5%', 
                    backgroundColor: "#E9EDC9",
                    border: "1px solid #CCD5AE",
                    boxShadow: "0 25px 50px -12px #909A70",
                    borderRadius: "12px",
                    transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#CCD5AE"
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#E9EDC9"
                }}
            >
                <h2
                    style={{
                        color: "#545E31"
                    }}
                >
                    {company}
                </h2>
                <h3
                    style={{
                        color: "#909A70"
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        color: "#AEB88F"
                    }}
                >
                    {description}
                </p>
                <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "6px",
                        // marginBottom: "16px",
                      }}
                    >
                      {tags.map((tag) => (
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
                            fontSize: "16px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
            </div>
        </div>
    )
}