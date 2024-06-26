import { useState } from "react";
import "./index.css";
import Cookies from 'js-cookie'

const AdminLogin = (props) => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [error,setError]=useState('')
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
      headers: {
        "Content-Type": "application/json"
      }
    };
    const url = "https://web-app-2ffv.onrender.com/admin-login";
    const response = await fetch(url, options);
    const data=await response.json();
    if (response.ok){
      const {jwtToken}=data;
      Cookies.set('jwt-token-admin',jwtToken)
      props.history.replace('/admin-edit-details')
    }
    else{
      setError(data)
    }
  };

  const signupLink=()=>{
    const {history}=props
    history.replace('/admin-signup')
  }

  return (
    <div className="login-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-img"
        alt=""
      />
      <div>
        <form onSubmit={onSubmitForm} className="form-container">
          <h1 className="login-heading">Admin Login</h1>
          <div className="input-container">
            <input
              className="username-input-field"
              type="text"
              placeholder="Enter admin username"
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
          <p>{error}</p>
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

export default AdminLogin;
