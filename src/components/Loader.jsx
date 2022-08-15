import { useEffect } from "react";
import { useState } from "react";
import "./loader.css";

function Loader({ messages }) {
  const [message, setMessage] = useState(0);
  useEffect(() => {
    setInterval(() => {
      if (message === 2) {
        setMessage(0);
      } else {
        setMessage((message) => message + 1);
      }
    }, 3000);
  }, []);
  return (
    <div className='loader-container'>
      <div>
        <div class='spinner'></div>
        <p className='message-loader'>{messages[message]}</p>
      </div>
    </div>
  );
}

export default Loader;
