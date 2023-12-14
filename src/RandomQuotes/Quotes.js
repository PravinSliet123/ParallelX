import React, { useState, useEffect } from 'react';
import './Quotes.css'

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [no,setNo] = useState(0)

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        
        console.log(data);
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        setNo(randomNum)
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }


  

   const handleClick = () => {
    getQuote();
   }

  return (
    <div className="quote-box">

      <div className='display-all'>

        <div className='display'>
          <div id="text"><p>{quote}</p></div>
          <div id="author"><p>~{author}</p></div>
        </div>
      
        <div className='btn'>
          <button onClick={handleClick} id="new-quote">New Quote</button>
        </div>

      </div>
      
    </div>
  )
}

export default Quotes;