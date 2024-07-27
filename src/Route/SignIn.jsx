import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormWithValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const navigate = useNavigate();

  const handleValidateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleValidatePassword = (password) => {
    // Example validation: password must be at least 6 characters
    return password.length >= 8;
  };

  useEffect(() => {
    setEmailValid(handleValidateEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(handleValidatePassword(password));
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              emailValid === null ? '' : emailValid ? 'border-green-500' : 'border-red-500'
            }`}
          />
          {emailValid === false && (
            <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700  text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              passwordValid === null ? '' : passwordValid ? 'border-green-500' : 'border-red-500'
            }`}
          />
          {passwordValid === false && (
            <p className="text-red-500 text-xs italic">Password must be at least 6 characters.</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
            onClick={()=> navigate('/post')}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormWithValidation;
