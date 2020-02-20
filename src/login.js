import React, { Component } from 'react';
import './login.css';
import { FacebookLoginButton } from "react-social-login-buttons";


class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="out">	
      <div className="container">	
      <div className="inner-container">
        <div className="header">
          LOGIN
        </div>
        <div className="box">

          <div className="input-group">
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

         <div className="recovery">
      	 <a className="recovery1">Forgot your password?</a> 
            <label>Memorise</label>
	        <input
	          type='checkbox'
	          className='custom-control-input'
	          id='customSwitchesChecked'
	          defaultChecked
	        />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>

          <div className="noacc"><label>No account? <label id="under">Register Now</label></label></div>  

        </div>
      </div>
      <div className="fb">
        <FacebookLoginButton>
		  <span>Connect with facebook</span>
		</FacebookLoginButton>
	  </div>	
      </div>
      </div>
    );
  }

}


export default LoginBox;
