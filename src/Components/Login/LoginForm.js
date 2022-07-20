import React from 'react'
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import { UserContext } from '../../UserContext';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Login' />
      <h1 className='title'>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <Input label="User" type='text' name='username' {...username} />
        <Input label="Password" type='password' name='password' {...password} />
        {loading ? <Button disabled>Loading...</Button> : <Button>Login</Button>}
        <Error error={error && 'Invalid user or password'} />
      </form>
      <Link to='/login/lost' className={styles.lost}>Forgot password?</Link>
      <div className={styles.registry}>
        <h2 className={styles.subtitle}>Registry</h2>
        <p>Dont have account?</p>
        <Link to='/login/create' className={stylesBtn.button}>Registration</Link>
      </div>
    </section>
  )
}

export default LoginForm