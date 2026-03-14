import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pilares from "./components/Pilares";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pilares />
      </main>
      <Footer />
    </>
  );
}
