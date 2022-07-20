import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFecth from '../../Hooks/useFecth';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFecth();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lost', 'reset')
      });

      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Lost Password?</h1>
      {
        data ? <p style={{ color: 'lightgreen', fontWeight: 'bold' }}>E-mail sent!</p> :
          <form onSubmit={handleSubmit}>
            <Input label='Email / User' type='text' name='email' {...login} />
            {loading ? <Button disabled>Sending...</Button> : <Button>Send</Button>}
          </form>
      }
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost