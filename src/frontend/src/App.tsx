import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
