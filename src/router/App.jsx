import { Header } from "../components/Header/Header";
import { AboutMe } from "../Pages/AboutMe/AboutMe";
import { Home } from "../Pages/Home/Home";
import { Skills } from "../Pages/Skills/Skills";
import { Contact } from "../Pages/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
