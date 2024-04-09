import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory(); 
  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/'); 
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo"></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email} // Corrected to use 'value' instead of 'defaultValue'
            onChange={(e) => setEmail(e.target.value)} // Handle input change
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password} // Corrected to use 'value' instead of 'defaultValue'
            onChange={(e) => setPassword(e.target.value)} // Handle input change
          />
          <br />
          <br />
          <button type="submit">Login</button> {}
        </form>
        <a href="/signup">Signup</a> {}
      </div>
    </div>
  );
}

export default Login;
