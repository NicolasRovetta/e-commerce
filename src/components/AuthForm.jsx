import { useState } from "react";
import "./AuthForm.css";
import registrarYGuardarUsuario from '../data/userCredentials.js';

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    if (email && password) {
      try {
        await registrarYGuardarUsuario(email, password, {});
        onLogin(email, password);
        console.log("Credenciales guardadas:", { email, password });
      } catch (error) {
        console.error("Error durante el registro:", error);
        if (error.code === 'auth/email-already-in-use') {
          setError("El correo electrónico ya está en uso.");
        } else if (error.code === 'auth/weak-password') {
          setError("La contraseña debe tener al menos 6 caracteres.");
        } else if (error.code === 'auth/invalid-email') {
          setError("El correo electrónico no es válido.");
        } else {
          setError("Error durante el registro");
        }
      }
    } else {
      setError("Credenciales incorrectas");
    }
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
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default AuthForm;
