import React, { Component,useState } from "react";


class EmailOtp extends React.Component {

   constructor  (props)  {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange = (value1, e) => {

    this.setState({ [value1]: e.target.value });
  }
  
 handleSubmit = (e) => {
  const data = new FormData(e.target);
    console.log(this.state);
  e.preventDefault();
 }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");
     
        const next = elmnt.target.tabIndex;
        if (next < 6) {
          elmnt.target.form.elements[next].focus()
        }
    }

  }

  render() {
  return (
    
    <div className="login__section--container">
      <div className="login__section--container1">
    <h1 className="heading__primary">CSS
        <span className="heading__secondary">Bookshops</span>
    </h1>
  </div>

  <div className="login__section--container2--signup">
      <form className="form" onSubmit={this.handleSubmit}>
        <h2  className="form__heading--otp">Confirm Email</h2>
        <p className="form__para--otp">OTP</p>
      <div className="form-content--otp">
        <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}
            

          />
          <p >__</p>
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

          <input
            name="otp5"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp5}
            onChange={e => this.handleChange("otp5", e)}
            tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

          <input
            name="otp6"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp6}
            onChange={e => this.handleChange("otp6", e)}
            tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />
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
  
  );
  }
}
export default EmailOtp;