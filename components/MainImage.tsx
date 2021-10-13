import styles from 'styles/components/MainImage.module.scss';

interface Props 

const MainImage = () => {
  return (
    <>
      <button className={styles.ImagesControl} onClick={prevImage}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
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
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

export default MainImage;
