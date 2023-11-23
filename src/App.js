import "../src/assets/css/style.css";
import "./App.css";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos/:videoId" element={<VideoDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
