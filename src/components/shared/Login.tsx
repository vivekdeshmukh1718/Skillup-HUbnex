import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase Authentication
import { app } from "../../../firebase-config"; // Import Firebase configuration

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const auth = getAuth(app); // Initialize Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password); // Attempt to sign in

      // Redirect to Admin Dashboard after successful login
      navigate("/admin-dashboard");
    } catch (error) {
      setError("Invalid credentials"); // Show error message if authentication fails
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message if any */}

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
