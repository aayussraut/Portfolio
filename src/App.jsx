import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Homepage from "./pages/homepage";
import Skills from "./pages/skills";
function App() {
  return (
    <div className=" homepage relative">
      <Navbar />
      <div className="content">
        <Homepage />
        <Skills />
        <Work />
        <Experience />
      </div>
    </div>
  );
}

export default App;
