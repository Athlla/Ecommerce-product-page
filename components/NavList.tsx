import styles from 'styles/components/NavList.module.scss';

const NavList = () => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>Collection</li>
        <li className={styles.NavItem}>Men</li>
        <li className={styles.NavItem}>Women</li>
        <li className={styles.NavItem}>About</li>
        <li className={styles.NavItem}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavList;
