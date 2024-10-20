import "./App.css";
import Portfolio from "./Components/Portfolio";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Analytics />
    </div>
  );
}

export default App;
