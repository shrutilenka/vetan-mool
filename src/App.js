import './App.css';
import Card from './components/cards';
import Faq from './components/faq';
import Feature from './components/features';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Stats from './components/stats';
import Subscribe from './components/subscribe';
import Tax from './components/tax';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Stats />
      <Feature />
      <Tax />
      <Faq />
      <Card />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
