import { useNavigate } from "react-router-dom";
import "./AuthChoice.css";

function AuthChoice() {
  const navigate = useNavigate();

  return (
    <div className="auth-choice">
      <h2>Welcome to Online Registry</h2>
      <p>Please choose how you want to continue</p>

      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
}

export default AuthChoice;
