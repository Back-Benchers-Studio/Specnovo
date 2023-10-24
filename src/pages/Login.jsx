import logo from "../assets/cases/logo.png"
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const LoginPage = () => {
  // You can add state and logic for form handling here

  return (
    <div className="login-container">
        <span id="bolb3" className="bolb"></span>
        <span id="bolb4" className="bolb"></span>
      <div className="login-content">
        <img src={logo} alt="" />
        <form>
            <h1>Log in</h1>
          <div className="form-group">
            <input type="text" id="username" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="social-login">
          <p>Or login with</p>
          <div className="social-icons">
            <FaGoogle className="social-icon" />
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
