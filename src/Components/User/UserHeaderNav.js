import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as MyStats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhotos } from '../../Assets/adicionar.svg';
import { ReactComponent as LogOut } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem)');
  const { pathname } = useLocation()

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])
  return (
    <>
      {
        mobile
        &&
        <button aria-label='Menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>
      }
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} 
                    ${mobileMenu && styles.navMobileActive} `}
      >
        <NavLink to='/account' end>
          <MyPhotos />
          {mobile && 'My photos'}
        </NavLink>
        <NavLink to='/account/stats'>
          <MyStats />
          {mobile && 'My Stats'}
        </NavLink>
        <NavLink to='/account/post'>
          <AddPhotos />
          {mobile && 'Add Photo'}
        </NavLink>
        <button onClick={userLogout}>
          <LogOut />
          {mobile && 'LogOut'}
        </button>
      </nav >
    </>
  );
}

export default UserHeaderNav;