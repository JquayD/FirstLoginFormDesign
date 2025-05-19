import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required />
          <div onClick={() => setShow(!show)}>
            {show ? (
              <FaEyeSlash onClick={() => setShow(false)} className="icon" title="Hide password" />
            ) : (
              <FaEye onClick={() => setShow(true)} className="icon" title="Show password" />
            )}

          </div>
        </div>


        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me!</label>
          <a href="#">Forgot Password?</a>
        </div>


        <button type="submit">Login</button>


        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>


    </div>
  );

};

export default LoginForm;
