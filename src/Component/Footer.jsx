import React from 'react';

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="max-w-md mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Zeygol. All rights reserved.</p>
        <p>
          <a href="#" className="text-blue-400 hover:text-blue-600" style={{textDecoration:"none",color:"white"}}>Privacy Policy</a> | 
          <a href="#" className="text-blue-400 hover:text-blue-600 ml-2" style={{textDecoration:"none",color:"white"}}>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
