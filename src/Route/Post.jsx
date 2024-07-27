import React, { useState, useEffect } from 'react';
import './Post.css';
import FooterPage from '../Component/Footer';

const avatars = [
  { id: 1, src: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, src: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 3, src: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 4, src: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 5, src: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 6, src: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 7, src: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 8, src: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 9, src: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 10, src: "https://randomuser.me/api/portraits/men/3.jpg" },
  // Add more avatar URLs here
];

const images = [
  { id: 1, src: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" },
  { id: 2, src: "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg" },
  { id: 3, src: "https://img.freepik.com/premium-photo/bright-green-meadow-with-grass_124507-13850.jpg" },
  { id: 4, src: "https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=pexels-pixabay-34950.jpg&fm=jpg" },
  { id: 5, src: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" },
  { id: 6, src: "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg" },
  { id: 7, src: "https://img.freepik.com/premium-photo/bright-green-meadow-with-grass_124507-13850.jpg" },
  { id: 8, src: "https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=pexels-pixabay-34950.jpg&fm=jpg" },
];

const Post = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Example validation: password must be at least 6 characters
    return password.length >= 6;
  };

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(validatePassword(password));
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 z-10">
        <div className="flex space-x-4 overflow-x-auto hide-scroll-bar px-4">
          {avatars.map(avatar => (
            <img key={avatar.id} src={avatar.src} alt="avatar" className="h-16 w-16 rounded-full border" />
          ))}
        </div>
      </div>
      <div className="pt-24 h-[calc(100vh-96px)] overflow-y-auto hide-scroll-bar">
        {images.map(image => (
          <img key={image.id} src={image.src} alt="carousel" className="w-full mb-4 rounded-md px-3" />
        ))}
      </div>
       <FooterPage/>
    </div>
  );
};

export default Post;
