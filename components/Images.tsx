import Thumbnail from './Thumbnail';
import styles from 'styles/components/Images.module.scss';
import { useEffect, useRef, useState } from 'react';
import LightBox from './LightBox';
import Backdrop from './Backdrop';

export const imagesData = [
  {
    src: '/images/image-product-1.jpg',
    alt: 'ProductImage-1',
    thumbnail: '/images/image-product-1-thumbnail.jpg',
  },
  {
    src: '/images/image-product-2.jpg',
    alt: 'ProductImage-2',
    thumbnail: '/images/image-product-2-thumbnail.jpg',
  },
  {
    src: '/images/image-product-3.jpg',
    alt: 'ProductImage-3',
    thumbnail: '/images/image-product-3-thumbnail.jpg',
  },
  {
    src: '/images/image-product-4.jpg',
    alt: 'ProductImage-4',
    thumbnail: '/images/image-product-4-thumbnail.jpg',
  },
];

interface Props {
  lightBoxMode?: boolean;
}

const Images = ({ lightBoxMode }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    imageRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }, [activeSlide]);

  const nextImage = () => {
    setActiveSlide((prevActiveSlide) => {
      if (prevActiveSlide === 3) {
        return 3;
      }
      return prevActiveSlide + 1;
    });
  };

  const prevImage = () => {
    setActiveSlide((prevActiveSlide) => {
      if (prevActiveSlide === 0) {
        return 0;
      }
      return prevActiveSlide - 1;
    });
  };

  const lightBoxHandler = () => {
    if (window.innerWidth < 768) {
      return;
    }
    if (lightBoxMode) {
      return;
    }
    setShowLightBox((prevState) => !prevState);
  };

  const ImagesClass = lightBoxMode
    ? [styles.Images, styles.LightBox]
    : [styles.Images];

  return (
    <>
      {showLightBox && (
        <>
          <LightBox />
          <Backdrop show={showLightBox} onClick={lightBoxHandler} />
        </>
      )}
      <div className={ImagesClass.join(' ')}>
        <button className={styles.ImagesControl} onClick={prevImage}>
          <svg
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <path
              d="M11 1 3 9l8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className={styles.Main}>
          {imagesData.map((image, i) => (
            <img
              key={i}
              src={image.src}
              alt={image.alt}
              onClick={lightBoxHandler}
              ref={activeSlide === i ? imageRef : null}
            />
          ))}
        </div>
        <button className={styles.ImagesControl} onClick={nextImage}>
          <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <path
              d="m2 1 8 8-8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className={styles.Thumbnails}>
          {imagesData.map((image, i) => (
            <Thumbnail
              key={i}
              src={image.thumbnail}
              alt={image.alt}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;
