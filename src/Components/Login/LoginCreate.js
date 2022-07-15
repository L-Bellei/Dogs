import React from 'react';
import { USER_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext';
import useFecth from '../../Hooks/useFecth';

const LoginCreate = () => {
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFecth();
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Registry</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Username'
          type='text'
          name='username'
          {...username}
        />
        <Input
          label='E-mail'
          type='email'
          name='email'
          {...email}
        />
        <Input
          label='Password'
          type='password'
          name='password'
          {...password}
        />
        {loading ? (<Button disabled>Registering...</Button>) : (<Button>Registry</Button>)}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;