import s from './Picarr.module.css';
import { useState, React } from 'react';
import { useEffect } from 'react';

const Picarr = ({ state }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    currentIndex < 0 && setCurrentIndex(state.flickr_images.length - 1);
    currentIndex > state.flickr_images.length - 1 && setCurrentIndex(0);
  }, [currentIndex]);

  return (
    <div className={s.sliderStyles}>

      <div className={s.container}>

        <img className={s.arrLogos}
          src={state.flickr_images[currentIndex]}
          alt="arrlogo" />

        <div onClick={goToPrevious} className={s.leftArrow}>
          ❰</div>

        <div onClick={goToNext} className={s.rightArrow}>
          ❱</div>

        <div className={s.dotsContainerStyles}>
          {state.flickr_images.map((slide, index) => (
            <div
              className={s.dotStyle}
              key={index}
              onClick={() => goToSlide(index)}
            >
              ●
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Picarr;

