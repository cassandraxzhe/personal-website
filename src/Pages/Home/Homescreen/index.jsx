import HeroSection from "../HeroSection";
import MyProjects from "../MyProjects";
import MyExperience from "../MyExperience";
import Navbar from "../Navbar";

export default function Home() {
    const pages=[
        {
            name: "About me",
            id: "heroSection"
        },
        {
            name: "Projects & Research",
            id: "myProjects"
        },
        {
            name: "Experience",
            id: "myExperience"
        },
        {
            name: "Github",
            link: "https://github.com/cassandraxzhe",
        },
    ]
   
    return(
        <>
            <Navbar pages={pages}/>
            <HeroSection/>
            <MyProjects/>
            <MyExperience/>
        </>
    )
}