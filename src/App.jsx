import { useState } from 'react';
import { QUOTES } from './quotes';
import './App.css';

export default function App() {
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentQuote = QUOTES[index];

  const getNewQuote = () => {
    const nextIndex = Math.floor(Math.random() * QUOTES.length);
    setIndex(nextIndex);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    const textToCopy = `"${currentQuote.quote}" - ${currentQuote.author}`;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="quote-card">
      <p className="quote-text">"{currentQuote.quote}"</p>
      <p className="quote-author">- {currentQuote.author}</p>

      <div className="button-group">
        <button onClick={getNewQuote}>New Quote</button>
        <button 
          onClick={copyToClipboard} 
          className={copied ? 'btn-copied' : 'btn-copy'}
        >
          {copied ? "Copied!" : "Copy Quote"}
        </button>
      </div>
    </main>
  );
}