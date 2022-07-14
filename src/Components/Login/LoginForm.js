import React from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleLogin(event) {
    event.preventDefault();

    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const json = await response.json();
    console.log(json);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type='text'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Login</button>
      </form>
      <Link to='/login/create'>Registration</Link>
    </section>
  )
}

export default LoginForm