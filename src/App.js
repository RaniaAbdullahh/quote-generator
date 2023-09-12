import './App.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';




const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  //social media share buttons

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(quote);
    const url = `https://api.whatsapp.com/send?text=${text}`;
    window.open(url, '_blank');
  };
  const handleFacebookShare = () => {
    const encodedQuote = encodeURIComponent(quote);
    const encodedURL = encodeURIComponent(window.location.href);
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&quote=${encodedQuote}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="share">
          <button className="share-icon" onClick={handleWhatsAppShare}>
           <FontAwesomeIcon icon={faWhatsapp} />
          </button>
          <button className="share-icon" onClick={handleFacebookShare}>
           <FontAwesomeIcon icon={faFacebook} />
          </button>
        </div>
      </div>

    </>
  )
}


export default App;
