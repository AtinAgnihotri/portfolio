import logo from "./logo.svg";
import "./App.css";
import PortfolioScreen from "./screens/portfolio.screen";
import projects from "./portfolio.json";

function App() {
  return (
    <div className="App">
      <PortfolioScreen projects={projects} />
    </div>
  );
}

export default App;
