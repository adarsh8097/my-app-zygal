import React, { useState } from 'react';
import FormWithValidation from './SignIn';
import FooterPage from '../Component/Footer';

const slides = [
  { id: 1, Image: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" },
  { id: 2, Image: "https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?size=626&ext=jpg&ga=GA1.1.1000121271.1721989951&semt=sph" },
  { id: 3, Image: "https://img.freepik.com/premium-photo/bright-green-meadow-with-grass_124507-13850.jpg" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto bg-gray-700">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 flex items-center justify-center  rounded-sm"
              style={{ height: '50vh', }}
            >
              <img src={slide.Image} alt='alt-img' className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-2 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
     {/* <FormWithValidation/> */}
     <FormWithValidation/>
     <FooterPage/>
    </div>
  );
};

export default Carousel;
