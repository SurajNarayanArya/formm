import React from 'react'
import '../Profile/Profile.css'
import { useState, useEffect } from 'react';

const Profile = () => {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("userDetails"));
        if (storedUsers) {
            setUserDetails(storedUsers);
        }
    }, []);
  return (
    <div className='suraj'>
            <h2>User Details</h2>
            <ul>
                {userDetails.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name}<br />
                        <strong>Number:</strong> {user.number}<br />
                        <strong>Date of Birth:</strong> {user.dob}<br />
                        <strong>Email:</strong> {user.email}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Profile
