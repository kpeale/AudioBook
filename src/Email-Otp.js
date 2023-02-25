import React, { useState } from "react";




const Email-Otp = () => {
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
        <h2  className="form__heading">Confirm Email</h2>
      <div className="form-content">
        <label htmlFor="email" className="label-email">OTP</label>
        <input type='text' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>

      

      <button type="submit" className="btn--form--signup">Confirm OTP</button>
      <p>Didnt get an OTP? 
        <span>
          <a href="" className="form--link"> Resend OTP</a>
        </span>
      </p>


    </form>
  </div>
    </div>
  
  </>)
}
export default Email-Otp;