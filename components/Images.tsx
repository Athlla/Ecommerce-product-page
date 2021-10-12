import Image from 'next/image';

import Thumbnail from './Thumbnail';
import styles from 'styles/components/Images.module.scss';

const Images = () => {
  return (
    <div className={styles.Images}>
      <div className={styles.Main}>
        <Image
          src="/images/image-product-1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Product-1"
        />
      </div>
      <div className={styles.Thumbnails}>
        <Thumbnail src="/images/image-product-1.jpg" alt="product-1" />
        <Thumbnail src="/images/image-product-2.jpg" alt="product-2" />
        <Thumbnail src="/images/image-product-3.jpg" alt="product-3" />
        <Thumbnail src="/images/image-product-4.jpg" alt="product-4" />
      </div>
    </div>
  );
};

export default Images;
