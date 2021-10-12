import styles from 'styles/components/ProductDetail.module.scss';

const ProductDetail = () => {
  return (
    <div className={styles.Product}>
      <div className={styles.Brand}>SNEAKER COMPANY</div>
      <h1 className={styles.ProductName}>Fall Limited Edition Sneakers</h1>
      <div className={styles.Desc}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </div>
      <div className={styles.Prices}>
        <div className={styles.Discount}>
          <h2 className={styles.Price}>$125.00</h2>
          <span className={styles.Percentage}>50%</span>
        </div>
        <div className={styles.Original}>
          <h3>$250.00</h3>
        </div>
      </div>
      <div className={styles.QuantitynButton}>
        <div className={styles.Quantity}>
          <span className={styles.Control}>-</span>
          <span>0</span>
          <span className={styles.Control}>+</span>
        </div>
        <button className={styles.Add2Cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.CartIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className={styles.ButtonText}>Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
