import About from "./components/about/about";
import Features from "./components/features/feature";
import Footer from "../../components/footter/footer";
import Support from "./components/support/support";

export default function HomePage() {
  return (
    <div>
      <About />
      <Features />
      <Support/>
      <Footer/>
    </div>
  );
}
