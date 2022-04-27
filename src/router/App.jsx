import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../Pages/Home/Home";

// import { Footer } from "../components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
