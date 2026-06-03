import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Rooms />
        <Amenities />
        <Reviews />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
