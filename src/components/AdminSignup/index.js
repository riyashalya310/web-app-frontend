import { useState } from "react";
import "./index.css";
import image from '../../images/images (2).png'
import Cookies from "js-cookie";

const AdminLogin = (props) => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
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
    const url = "https://web-app-2ffv.onrender.com/admin-signup";
    const response = await fetch(url, options);
    const data=await response.json()
    if (response.ok){
      Cookies.set('jwt-token',data.jwtToken)
      props.history.push('/admin-edit-details')
    }
    else{
      setError(data)
    }
  };

  const signinLink=()=>{
    const {history}=props
    history.replace('/admin-login')
  }

  return (
    <div className="login-form-container">
      <img
        src={image}
        alt=""
      />
      <div>
        <form onSubmit={onSubmitForm} className="form-container">
          <h1 className="login-heading">Admin Signup</h1>
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
          <div className="buttons-group">
            <button type="submit" className="login-button">
              Signup
            </button>
            <button type="button" className="signup-line" onClick={signinLink}>Already have an account? Signin</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
