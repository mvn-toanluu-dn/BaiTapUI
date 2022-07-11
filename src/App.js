import "./assets/scss/styles.scss";
import { Footer, Header } from "./components/index";
import Home from "./pages/Home/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
