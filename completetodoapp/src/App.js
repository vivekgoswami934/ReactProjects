import "./App.css";
import Home from "./Components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import Content from "./Components/Pages/content/Content";
function App() {
  return (
    <div className="App">
      <Home />

      {/* <Routes>
         <Route path="/" element={<Content />} />
         <Route path="/"  />
      </Routes> */}
    </div>
  );
}

export default App;
