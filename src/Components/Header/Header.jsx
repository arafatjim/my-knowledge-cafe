import React from 'react';
import profilePhoto from '../../assets/profile.jpg'
const Header = () => {
          return (
                    
                    <header className=" flex justify-between items-center text-center  p-4 mx-4 border-b-2">
                    <p className='text-4xl font-bold text-black'>Knowledge Cafe</p>
                    <img src={profilePhoto} className='profile w-20 h-20 rounded-full ' alt="Porfile Photo" />
                    </header>
                    
          );
};

export default Header;