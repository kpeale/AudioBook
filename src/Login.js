import React, { useState } from "react";

import { AiFillEye} from 'react-icons/ai';

import { AiFillEyeInvisible} from 'react-icons/ai';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  
 const handleSubmit = (e) => {
  e.preventDefault();
 }

 
  return (
    <>
    <div className="login__section--container">
      <div className="login__section--container1">
    <h1 className="heading__primary">CSS
        <span className="heading__secondary">Bookshops</span>
    </h1>
  </div>

  <div className="login__section--container2">
      <form className="form" onSubmit={handleSubmit}>
        <h2  className="form__heading">Login</h2>
      <div className="form-content">
        <label htmlFor="email" className="label-email">Email Address</label>
        <input type='text' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>

      <div className="form-content">
        <label htmlFor="password" className="label-password">Password </label>
        <input type={changePassword ? "password" : "text"} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        
        <span className="eye"
                 onClick={() => {
                    setChangePassword(changeIcon);
                 }}
              >
                 {changeIcon ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
      </div>

      <button type="submit" className="btn--form">Login</button>
      <p>I do not have an account. 
        <span>
          <a href="" className="form--link"> Register</a>
        </span>
      </p>


    </form>
  </div>
    </div>
  
  </>)
}
export default Login;