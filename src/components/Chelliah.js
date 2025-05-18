import React, { useState } from 'react';
import './Chelliah.css'; // Import your CSS file for styling

function Main() {
// Sample image data (you can replace with your own image URLs)
  const imageList = Array.from({ length:5}, (_, i) => `${process.env.PUBLIC_URL}/images/chella/${i+1}.jpg`);

  //create an array of image objects
  const actulimages = Array.from({ length: imageList.length }, (_, i) => ({
    id: i + 1,
    url: imageList[i]
  }));
  
const [images] = useState(actulimages);

const [selectedImage, setSelectedImage] = useState(null);

// Handle image click to show full size
const handleImageClick = (image) => {
  setSelectedImage(image);
};

// Close modal
const closeModal = () => {
  setSelectedImage(null);
};

  return (
    <section>
      <p>Chelliah Palkudam with many members...</p>

      <div>
           
      {/* Gallery Grid */}
      <div className="gallery">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt={image.title} />
            {/* <div className="image-title">{image.title}</div> */}
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close">&times;</span>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>    
    </section>
  );
}

export default Main;