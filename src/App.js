import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Lista from "./routes/Lista";
import Footer from "./routes/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Lista />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
