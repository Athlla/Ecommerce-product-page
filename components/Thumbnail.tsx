import Image from 'next/image';

import styles from 'styles/components/Thumbnail.module.scss';

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
}

const Thumbnail = ({ src, alt, onClick }: Props) => {
  return (
    <div className={styles.Thumbnail} onClick={onClick}>
      <Image src={src} width={100} height={100} objectFit="cover" alt={alt} />
    </div>
  );
};

export default Thumbnail;
