import React from 'react';
import useFecth from '../../Hooks/useFecth';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinity }) => {
  const { data, loading, error, request } = useFecth();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total: 3, user })
      const { response, json } = await request(url, options);
      if (response.ok && json.length < total) setInfinity(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinity]);

  if (error) return <Error error={error} />

  if (loading) return <Loading />

  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) =>
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />)}
      </ul>
    );

  else return null;
}

export default FeedPhotos;