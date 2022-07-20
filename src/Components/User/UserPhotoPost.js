import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFecth from '../../Hooks/useFecth';
import { PHOTO_POST } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFecth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('idade', age.value);
    formData.append('peso', weight.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Post' description='Principal feed dogs photos' />
      <form onSubmit={handleSubmit}>
        <Input
          label='Name'
          type='text'
          name='name'
          {...name}
        />
        <Input
          label='weight'
          type='number'
          name='weight'
          {...weight}
        />
        <Input
          label='Age'
          type='number'
          name='age'
          {...age}
        />
        <input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
        {loading ? <Button disabled>Sending</Button> : <Button>Add</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}>
        </div>}
      </div>
    </section>
  );
}

export default UserPhotoPost;