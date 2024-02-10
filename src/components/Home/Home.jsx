import React, { useState, useEffect } from 'react'
import '../Home/Home.css'


const Home = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    // const [user, setUser] = useState({});

    const [userDetails, setUserDetails] = useState([]);

    console.log(userDetails);
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("userDetails"));
        if (storedUsers) {
            setUserDetails(storedUsers);
        }
    }, []);

    // const getUserDetails = (e) => {
    //     alert("You have successfully submitted the form !!")
    //     e.preventDefault();
    //     const newUser = { name, number, dob, email };
    //     const updatedUserDetails = [...userDetails, newUser];
    //     setUserDetails(updatedUserDetails);
    //     localStorage.setItem("userDetails", JSON.stringify(updatedUserDetails));
    // }

    //const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert("You have successfully submitted the form !!");
        const newUser = { name, number, dob, email };
        const updatedUserDetails = [...userDetails, newUser];
        setUserDetails(updatedUserDetails);
        localStorage.setItem("userDetails", JSON.stringify(updatedUserDetails));
    } else {
        alert("Form submission failed due to validation errors!");
    }
    };


    const validateForm = () => {
      let isValid = true;
      const errors = {};

      // Name validation
      if (name.trim() === "") {
          errors.name = "Name is required";
          isValid = false;
      }

      // Number validation
      if (number.trim() === "") {
          errors.number = "Number is required";
          isValid = false;
      }

      // Date of Birth validation
      if (dob.trim() === "") {
          errors.dob = "Date of Birth is required";
          isValid = false;
      }

      // Email validation
      if (email.trim() === "") {
          errors.email = "Email is required";
          isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = "Invalid email address";
          isValid = false;
      }

      setErrors(errors);
      return isValid;
  };



  return (
    <>
    <div className="outer-container-registration">
      <div className="inner-container-registration">
        <h1>Registration</h1>
        <form id="registrationForm"  onSubmit={handleSubmit}>
          <label htmlFor="username">Name:</label>
          <input onChange={(e) => setName(e.target.value)} id="name" type="name" placeholder="Name" value={name}/>
          <label htmlFor="contact">Contact Number</label>
          <input onChange={(e) => setNumber(e.target.value)} id="contact" type="name" placeholder="Contact Details" value={number} />
          <label htmlFor="dob">DOB</label>
          <input onChange={(e) => setDob(e.target.value)} id="dob" type="date" placeholder="DOB" value={dob}/>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email" value={email}/>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder="Password" />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    </>
  )
}

export default Home
