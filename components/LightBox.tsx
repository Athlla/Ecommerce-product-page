import Thumbnail from './Thumbnail';
import Images, { imagesData } from './Images';

import styles from 'styles/components/LightBox.module.scss';

const LightBox = () => {
  return (
    <div className={styles.LightBox}>
      <Images lightBoxMode />
    </div>
  );
};

export default LightBox;
