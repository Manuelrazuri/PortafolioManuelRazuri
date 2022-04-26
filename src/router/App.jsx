import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Main } from "../Pages/Main/Main";
// import { Footer } from "../components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
