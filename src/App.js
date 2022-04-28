import React, {useState, useEffect} from 'react';

const API_URL = `http://api.icndb.com/jokes/random?firstName=Ghenet&lastName=Kibrom`

function App() {
  const [joke, setJoke] = useState('');

  const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke));
  }
  useEffect(()=> {
    generateJoke();
  },[])

  return (
    <div className="box">
      <h3>Ghenet Kibrom Joke Generator</h3>
      <p>{joke}</p>
      <button onClick={generateJoke}>Get new joke</button>
    </div>
  );
}

export default App;
