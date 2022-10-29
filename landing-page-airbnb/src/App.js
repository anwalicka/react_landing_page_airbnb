import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import hero5 from '../src/images/hero5.jpg';
import hero6 from '../src/images/hero6.jpg';
import hero4 from '../src/images/hero4.jpg';
import hero3 from '../src/images/hero3.jpg';
function App() {
  const cardData = [
    {img: hero5, description: "Life lessons with Karol Smith Junior"},
    {img: hero6,description: "Life lessons with Jane"},
    {img: hero4, description: "Life lessons with Paulo"},
    {img: hero3, description: "Life lessons with Alik"},
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='cards-container'>
        <Card
          img={hero5}
          description="Life lessons with Karol Smith Junior"
          rating={6.9}
          reviewCount={5}
          country="NL"
          price="$250"
          />
        <Card
          img={hero6}
          description="Life lessons with Jane"
          rating={4.3}
          reviewCount={10}
          country="PL"
          price="$900"
          />
        <Card 
          img={hero4}
          description="Life lessons with Paulo"
          reviewCount={2}
          rating={2.7}
          country="DE"
          price="$300"
        />
        <Card
          img={hero3}
          description="Life lessons with Alik"
          reviewCount={6}
          rating={5.0}
          country="USA"
          price="$550"
        />
      </div>
    </div>

    );
}

export default App;
