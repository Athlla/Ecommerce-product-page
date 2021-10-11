import Image from 'next/image';

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
      <div className={styles.Thumbnail}></div>
    </div>
  );
};

export default Images;
