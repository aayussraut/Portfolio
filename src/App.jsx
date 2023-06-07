import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Homepage from "./pages/homepage";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className=" homepage relative">
      <Navbar />
      <div className="content">
        <Homepage />
        <Skills />
        <Work />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
