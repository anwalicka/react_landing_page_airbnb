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
    {
      img: hero5,
      description: "Life lessons with Karol Smith Junior",
      rating: 6.9,
      reviewCount: 5,
      country:"NL",
      price: "$250",
      openSpots: 0,
    },
    {
      img: hero6,
      description: "Life lessons with Jane",
      rating: 5.4,
      reviewCount: 7,
      country:"DE",
      price: "$550",
      openSpots: 1,
    },
    {
      img: hero4,
      description: "Life lessons with Paulo",
      rating: 7.9,
      reviewCount: 10,
      country:"online",
      price: "$300",
      openSpots:3,
    },
    {
      img: hero3,
      description: "Life lessons with Alik",
      rating: 8.5,
      reviewCount: 11,
      country:"USA",
      price: "$950",
      openSpots: 0,
    },
  ];

  const card = cardData.map(data => {
    return <Card {...data} />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='cards-container'>
        {card}
      </div>
    </div>

    );
}

export default App;
