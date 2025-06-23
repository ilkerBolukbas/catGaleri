"use client";
import { useState } from "react";

// Görsellerin yolunu "public/images" içinden ver
const images: string[] = [
  "./images/cat1.jpg",
  "./images/cat2.jpg",
  "./images/cat3.jpg",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="kart">
      <h1>Galeri </h1>
      <div className="sol">
        <button onClick={goToPrevious}>Önceki</button>
      </div>
      <img
        className="image"
        src={images[currentIndex]}
        alt={`carousel-${currentIndex}`}
      />
      <button onClick={goToNext}>Sonraki</button>
    </div>
  );
}

export default App;
