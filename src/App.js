import React, {useState, useEffect} from 'react';

const API_URL = `http://api.icndb.com/jokes/random?firstName=Ghenet&lastName=Kibrom`

function App() {
  const [joke, setJoke] = useState('');

  useEffect(()=> {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
  },[])

  return (
    <div className="box">
      <h3>Chuck Norris Joke Generator</h3>
      <p>{joke}</p>
      <button>Get new joke</button>
    </div>
  );
}

export default App;
