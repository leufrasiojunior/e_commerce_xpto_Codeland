import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./routes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <a href="/contact">Entre em contato</a> */}
      {/* <Lista /> */}
      <Outlet />
    </div>
  );
}

export default App;
