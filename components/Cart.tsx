import Image from 'next/image';

import styles from 'styles/components/Cart.module.scss';
import { product } from './ProductDetail';

interface Props {
  show: boolean;
  cartItems?: product[];
  removeCart?: () => void;
}

const Cart = ({ show, cartItems, removeCart }: Props) => {
  const className = [styles.Cart];
  if (show) {
    className.push(styles.Show);
  }

  return (
    <div className={className.join(' ')}>
      <p className={styles.Text}>Cart</p>
      <div className={styles.CartContents}>
        {cartItems.length !== 0 ? (
          cartItems.map((item) => (
            <div className={styles.CartItems}>
              <div className={styles.Image}>
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={50}
                  height={50}
                  quality={50}
                  alt="Product-1"
                />
              </div>
              <div className={styles.Details}>
                <p className={styles.ProductName}>{item.name}</p>
                <div className={styles.Total}>
                  <p>
                    ${item.price} x {item.quantity}{' '}
                    <strong>${item.price * item.quantity}.00</strong>
                  </p>
                </div>
              </div>
              <div className={styles.Action}>
                <img
                  src="/images/icon-delete.svg"
                  alt="delete"
                  onClick={removeCart}
                />
              </div>
            </div>
          ))
        ) : (
          <div className={styles.Empty}>
            <p>Your Cart is Empty</p>
          </div>
        )}
        {cartItems.length !== 0 && (
          <button className={styles.CheckoutButton}>Checkout</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
