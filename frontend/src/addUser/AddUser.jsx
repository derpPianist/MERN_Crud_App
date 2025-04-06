import React, { useState } from 'react';
import "./addUser.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUser = () => {

  const users = {
    name : "",
    email : "",
    address : ""
  };

  const [user, setUser] = useState(users)
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const {name, value} = e.target;
    console.log(name, value)
    
    setUser({...user, [name]: value})
  }

  const submitForm = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/user", user)
    .then((response) => {
      toast.success(response.data.message, {position: "top-right"})
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
    })
  }

  return (
    <div className='addUser'>

      <Link type="button" to="/" class="btn btn-secondary">Back</Link>

      <h3>Add new User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor='name'>Name</label>
          <input 
          type='text'
          id='name'
          onChange={inputHandler}
          name='name'
          autoComplete='off'
          placeholder='Enter your name'
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor='email'>Email</label>
          <input 
          type='text'
          id='email'
          onChange={inputHandler}
          name='email'
          autoComplete='off'
          placeholder='Enter your email'
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor='address'>Address</label>
          <input 
          type='text'
          id='address'
          onChange={inputHandler}
          name='address'
          autoComplete='off'
          placeholder='Enter yout address'
          />
        </div>
        <div className='inputGroup'>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser