import Backdrop from './Backdrop';
import NavList from './NavList';

import styles from 'styles/components/Sidebar.module.scss';

interface Props {
  show: boolean;
  onClick: () => void;
}

const Sidebar = ({ show, onClick }: Props) => {
  let className = [styles.Sidebar];
  if (show) {
    className.push(styles.Show);
  }

  return (
    <>
      <aside className={className.join(' ')}>
        <nav className={styles.Nav}>
          <NavList />
        </nav>
      </aside>
      <Backdrop show={show} onClick={onClick} />
    </>
  );
};

export default Sidebar;
