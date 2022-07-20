import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFecth from '../../Hooks/useFecth';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFecth();

  async function handleClick(event) {
    const confirm = window.confirm('Are you shure about this?');

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {
        loading ? (
          <button onClick={handleClick} className={styles.delete} disabled>Deleting...</button>
        ) : (
          <button onClick={handleClick} className={styles.delete}>Delete</button>
        )}

    </>
  );
}

export default PhotoDelete;