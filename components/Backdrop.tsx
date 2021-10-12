import styles from 'styles/components/Backdrop.module.scss';

interface Props {
  show: boolean;
  onClick: () => void;
}

const Backdrop = ({ show, onClick }: Props) => {
  let className = [styles.Backdrop];
  if (show) {
    className.push(styles.Show);
  }

  return <div className={className.join(' ')} onClick={onClick}></div>;
};

export default Backdrop;
