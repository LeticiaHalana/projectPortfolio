import { BannerSection } from "./components/BannerSection";
import { Footer } from "./components/Footer/inder";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechSection } from "./components/TechSection";
import "./styles/globalStyles.css";

function App() {

  return (
    <>
      <Header />
      <BannerSection />
      <ProjectsSection />
      <TechSection />
      <Footer/>
      </>
  )
}

export default App
