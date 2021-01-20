import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDatabase = {
    "🐵": "Monkey Face",
    "👽": "Alien",
    "🐺": "Wolf",
    "🐶": "Dog",
    "🐴": "Horse",
    "🐼": "Panda",
    "🐔": "Chicken"
  };

  var [meaning, setMeaning] = useState("");

  function emojiMeaning(event) {
    meaning = emojiDatabase[event.target.value];
    if (meaning === undefined || meaning == null) {
      meaning = "OOPs! This emoji is not present in database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    meaning = emojiDatabase[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Animal Emoji Meaning Finder</h1>
      <input onChange={emojiMeaning} />
      <div>{meaning}</div>
      <h2>Emojis We Know</h2>
      {Object.keys(emojiDatabase).map(function (emoji) {
        return (
          <span
            className="emoji"
            keys={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
