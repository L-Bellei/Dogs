import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const context = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - home'><Dogs /></Link>
        <Link className={styles.login} to='/login'>
          Login / Create
          {context.user}
        </Link>
      </nav>
    </header>
  );
}

export default Header;