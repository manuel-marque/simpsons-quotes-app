import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard'
import axios from 'axios';

const sampleQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
  };

function App() {

  const [randomQuote, setRandomQuote] = React.useState(sampleQuote);
  
  const getRandomQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setRandomQuote(data[0]);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <QuoteCard randomQuote={randomQuote} />
      <button type="button" onClick={getRandomQuote} >Get random quote</button>

    </div>
  );
}

export default App;
