import React from "react";
import UsersList from '../componenet/UsersList'; // Adjust the path based on your project structure

// import Pic from '../assets/image.png'
import Pic from '../../assets/image.png'
import Peter from '../../assets/peter.jpeg'

const User = () => {
  const USER = [
    { id: 'u1', 
      name: 'Miaw', 
      image: Pic,
       places: 3 },
    { id: 'u2', 
      name: 'Peter Pic', 
      image: Peter,
       places: 3 }
      ];

      
  return <UsersList items={USER} />;
};

export default User;
