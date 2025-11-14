import About from "./components/about/about";
import Features from "./components/features/feature";
import Footer from "../../components/footter/footer";
import Support from "./components/support/support";
import Header from "@/components/header/header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Support/>
      <Footer/>
    </div>
  );
}
