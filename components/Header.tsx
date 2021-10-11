import styles from 'styles/components/Header.module.scss';
import NavList from './NavList';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Left}>
        <div className={styles.Menu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.MenuIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className={styles.Logo}>
          <h1>sneakers</h1>
        </div>
        <NavList />
      </div>
      <div className={styles.Right}>
        <div className={styles.Cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.CartIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className={styles.Profile}>
          <img src="/images/image-avatar.png" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
