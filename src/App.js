import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Academics from "./components/Academics/Academics";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Photography from "./components/Photography/Photography";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
    <Navbar />
    <Intro />
    <Skills />
    <Academics />
    <Project />
    <Photography />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
