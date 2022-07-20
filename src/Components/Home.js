import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Photos' description='Principal feed dogs photos' />
      <Feed />
    </section>
  );
}

export default Home