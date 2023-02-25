import React, { useState } from "react";



const ResetPassword1 = () => {
  const [email, setEmail] = useState('');
 

  
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
        <h2  className="form__heading--resetpassword1">Reset Password</h2>
      <div className="form-content">
        <label htmlFor="email" className="label-email">Email Address</label>
        <input type='text' id="email--resetpswrd1" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>

     
      <button type="submit" className="btn--form--signup">Send me OTP</button>
      <p>Remembered Password?
        <span >
          <a href="" className="form--link"> Register</a>
        </span>
      </p>


    </form>
  </div>
    </div>
  
  </>)
}
export default ResetPassword1;