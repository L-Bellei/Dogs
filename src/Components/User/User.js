import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import Feed from '../Feed/Feed';
import UserStats from './UserStats';

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='post' element={<UserPhotoPost />} />
        <Route path='stats' element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;