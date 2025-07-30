

export default function Navbar({pages}) {
    return (
        <div
            style= {{
                // display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyItems: "center",
                color: "#CCD5AE",
                backgroundColor: "#909A70",
                padding: '16px'
            }}
        >
            {pages.map((page) => (
                <a
                    key={page}
                    style={{
                    // display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    color: "#E9EDC9",
                    padding: "2px 8px",
                    fontSize: "24px",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                    textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#545E31"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#E9EDC9"
                    }}
                    href={page.link ?? "/"}
                    onClick={e => {
                        if (page.id !== undefined) {
                            let section = document.getElementById(page.id);
                            e.preventDefault();  // Stop Page Reloading
                            section && section.scrollIntoView({behavior: "smooth"}); 
                        }
                    }}
                >
                    {page.name}
                </a>
                ))}
        </div>
    )
}