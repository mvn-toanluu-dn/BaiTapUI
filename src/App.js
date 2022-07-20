import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./assets/scss/styles.scss";
import { Footer, Header } from "./components/index";
import Home from "./pages/Features/Home/index";
import Form from "./pages/Features/Form/index";
function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Home />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
