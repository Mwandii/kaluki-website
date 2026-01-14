import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function Homepage () {
    return (
        <div className="montserrat">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Education/>
        <ContactMe/>
        <Footer/>
        </div>
    )
}

export default Homepage;