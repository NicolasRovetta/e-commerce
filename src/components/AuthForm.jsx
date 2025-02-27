import { useState } from "react";
import "./AuthForm.css"; 

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div>
      <h3>Login</h3>
        <label htmlFor="email">Email:</label>        
        <input
          type="email"
          placeholder="ingrese su email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>      
        <label htmlFor="password">Password:</label>
        <input
        placeholder="********"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default AuthForm;
