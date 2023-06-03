import React, { useState } from 'react';
const Slider = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToNextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    setCurrentPhotoIndex(nextIndex);
  };

  const goToPreviousPhoto = () => {
    const previousIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    setCurrentPhotoIndex(previousIndex);
  };

  return (
      <div className="slider">
        <img src={photos[currentPhotoIndex]} alt="Slider" />
        <button onClick={goToPreviousPhoto}>Назад</button>
        <button onClick={goToNextPhoto}>Далее</button>
      </div>
  );
};
export default Slider