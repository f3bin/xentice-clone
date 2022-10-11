
import FirstNavBar from './components/FirstNavBar/FirstNavBar';
import SecondNavBar from './components/SecondNavBar/SecondNavBar';
import BodySearchBox from './components/BodySearchBox/BodySearchBox';
import Cards from './components/Cards/Cards';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [property, setProperty] = useState([])

  const getProperties = async () => {
    const res = await fetch("https://api.xentice.com/api/postadSelect");
    setProperty(await res.json());
  }

  useEffect(() => {
    getProperties();
  }, []);
  

  return (
    <div>
      <FirstNavBar />
      <SecondNavBar />
      <BodySearchBox />
      {property.map((Item) => {
        return (
          <Cards name={Item.propertyType.name} image={Item.images} />
        );
      })}

    </div>
  );
}

export default App;
