import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to='/account'>
            {data.nome}
          </Link>) :
          <Link className={styles.login} to='/login'>
            Login / Register
          </Link>
        }
      </nav>
    </header>
  );
}

export default Header;