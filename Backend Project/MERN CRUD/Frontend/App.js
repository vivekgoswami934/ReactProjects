import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import AllUser from "./Components/AllUser";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      {localStorage.getItem("curdAppToken") ? <AllRoutes /> : <Login />}
    </div>
  );
}

export default App;
