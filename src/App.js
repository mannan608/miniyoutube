import "../src/assets/css/style.css";
import "./App.css";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="videos/:videoId" element={<VideoDetails />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
