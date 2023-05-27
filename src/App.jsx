import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage";
import Skills from "./pages/skills";
function App() {
  return (
    <div className=" homepage relative">
      <Navbar />
      <div className="content">
        <Homepage />
        <Skills />
      </div>
    </div>
  );
}

export default App;
