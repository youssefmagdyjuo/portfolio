import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
