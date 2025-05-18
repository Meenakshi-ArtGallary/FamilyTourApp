import React, {useState,useEffect} from 'react';
import './Home.css';





function Home() {

//Array of images
const images = Array.from({ length: 36 }, (_, i) => `${process.env.PUBLIC_URL}/images/all/${i+1}.jpg`);

//Print the images in console
console.log(images);

// State to track current image index
const [currentIndex, setCurrentIndex] = useState(0);

// Delay in milliseconds (e.g., 3000ms = 3 seconds)
const delay = 3000;

// Effect to handle image switching
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, delay);

  // Cleanup interval on component unmount
  return () => clearInterval(timer);
}, [images.length]);

  return (
    <section>
      <h2>Chellaiah Mudaliar</h2>
      <p>Welcome to our Family photo Tour. Explore.Remember</p>

      <div style={{ textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt={`Slideshow ${currentIndex + 1}`}
        style={{width: '320px', height: '320px',borderRadius : '15px',objectFit : 'cover', animation: 'fade 1s ease-in-out'}}
      />
    </div>
    
    </section>
  );
}

export default Home;