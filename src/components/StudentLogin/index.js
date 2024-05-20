import { useState } from "react";
import "./index.css";
import image from '../../images/images (1).png'

const StudentLogin = (props) => {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitForm = async (event) => {
    const userDetails = {
      admin_name: username,
      password,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const url = "";
    const response = await fetch(url, options);
  };

  const signupLink=()=>{
    const {history}=props
    history.replace('/student-signup')
  }


  return (
    <div className="login-form-container">
      <img
        src={image}
        alt=""
      />
      <div>
        <form onSubmit={onSubmitForm} className="form-container">
          <h1 className="login-heading">Student Login</h1>
          <div className="input-container">
            <input
              className="username-input-field"
              type="text"
              placeholder="Enter student username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="input-container">
            <input
              className="password-input-field"
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <p className="forgot-password">forgot password?</p>
          <div className="buttons-group">
            <button type="submit" className="login-button">
              Login
            </button>
            <button type="button" className="signup-line" onClick={signupLink}>Don't have an account? Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
