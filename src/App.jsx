import Navbar from "./components/Navbar";
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
      </div>
    </div>
  );
}

export default App;
