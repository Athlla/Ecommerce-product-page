import Image from 'next/image';

import styles from 'styles/components/Thumbnail.module.scss';

interface Props {
  src: string;
  alt: string;
}

const Thumbnail = ({ src, alt }: Props) => {
  return (
    <div className={styles.Thumbnail}>
      <Image src={src} width={100} height={100} objectFit='cover' alt={alt} />
    </div>
  );
};

export default Thumbnail;
