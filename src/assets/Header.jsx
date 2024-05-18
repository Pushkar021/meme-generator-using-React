import React from "react";
import y from "../public/images/Troll Face.png" className="header--image"

export default function Header() {
  return (
    <header className="header">
      <img src={y} />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project 5</h4>
    </header>
  );
}
