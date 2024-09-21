import React, { useState, useEffect } from 'react';
import Container from './components/Container';

function App() {
  const [data, setData] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      setData(res.results);
      console.log(res.results)
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1 className='title'>React Internship</h1>
      </header>
      <Container data={data} />
    </>
  );
}

export default App;
