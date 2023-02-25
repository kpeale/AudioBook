import React, { useState } from "react";

import { AiFillEye} from 'react-icons/ai';

import { AiFillEyeInvisible} from 'react-icons/ai';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [changePassword, setChangePassword] = useState(true);
  const [changePassword2, setChangePassword2] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const changeIcon2 = changePassword2 === true ? false : true;

  
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

  <div className="login__section--container2--signup">
      <form className="form" onSubmit={handleSubmit}>
        <h2  className="form__heading">Signup</h2>
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

      <div className="form-content">
        <label htmlFor="password" className="label-password">Confirm Password </label>
        <input type={changePassword2 ? "password" : "text"} id="password" name="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required></input>
        
        <span className="eye2"
                 onClick={() => {
                    setChangePassword2(changeIcon2);
                 }}
              >
                 {changeIcon2 ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
      </div>

      <button type="submit" className="btn--form--signup">Create Account</button>
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
export default Signup;