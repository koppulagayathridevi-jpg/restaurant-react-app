
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Stats from "../components/Stats";

function Home() {
  return (
    <div>
        
        <Hero/>
        <Stats/>
        <Reviews/>
        <Gallery/>
       
        
        <Footer/>
        
    </div>
  )
}

export default Home;