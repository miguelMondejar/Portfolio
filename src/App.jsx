import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="min-h-screen p-4">{renderSection()}</main>
      <Footer />
    </>
  );
}

export default App;
