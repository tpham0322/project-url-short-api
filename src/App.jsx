import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden font-['Poppins'] text-[#2f2f3f]">
      <Header />

      <main>
        <Hero />
        <Shortener />
        <Statistics />
        <Boost />
      </main>

      <Footer />
    </div>
  );
}

export default App;