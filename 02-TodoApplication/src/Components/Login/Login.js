import { useState } from "react";
import "./Login.css";
function Login(props) {
  // Component States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  // Collecting User Inputs
  // // Collecting Email
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setEmptyEmail(false);
  };
  // // Collecting Password
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    setEmptyPassword(false);
  };

  // Form Submision
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      if (email.trim().length === 0 || !email.includes("@")) {
        setEmptyEmail(true);
        // return;
      }
      if (password.trim().length === 0 || password.length < 5) {
        setEmptyPassword(true);
        // return;
      }
      return;
    }
    props.getLogin(true);
  };

  return (
    <div>
      <h2 className="login-header">LOG IN</h2>
      <form className="login-form" onSubmit={loginSubmitHandler}>
        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={emailChangeHandler}
            className={emptyEmail && "error"}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={passwordChangeHandler}
            className={emptyPassword && "error"}
          />
        </div>
        <div className="btn-box">
          <button className="login-form-btn" type="submit">
            Log IN
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
