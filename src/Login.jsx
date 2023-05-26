import React from "react";
import "./login.css";
import formImg from "./images/form-img.png";
import google from "./images/google.png";
function Login() {
  return (
    <div className="container form">
      <div className="form login">
        <div className="form-content">
          <header>Login to Mealy</header>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <a href="#" className="link signup-link">
                Signup
              </a>
            </span>
          </div>
          <div className="form-img">
            <img src={formImg} alt="" />
          </div>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>
        </div>

        <div className="form-link forgot">
          <a href="#" className="forgot-pass">
            Forgot password?
          </a>
        </div>

        <div className="media-options">
          <a href="#" className="field google">
            <img src={google} alt="" className="google-img" />
            <span>Continue with Google</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
