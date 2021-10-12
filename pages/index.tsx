import Header from 'components/Header';
import Images from 'components/Images';
import Sidebar from 'components/Sidebar';
import ProductDetail, { product } from 'components/ProductDetail';

import styles from 'styles/Home.module.scss';
import { useState } from 'react';

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const sidebarHandler = () => {
    setSideBar((prevState) => !prevState);
  };

  const cartHandler = (product: product) => {
    let foundProduct = false;
    const productItem = cartItems.map((item) => {
      if (item.name === product.name) {
        foundProduct = true;
        return { ...item, quantity: item.quantity + product.quantity };
      }
      return item;
    });

    if (foundProduct) {
      return setCartItems(productItem);
    }

    productItem.push(product);
    return setCartItems(productItem);
  };

  const removeCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Header
        sidebar={sideBar}
        openSidebar={sidebarHandler}
        cartItems={cartItems}
        removeCart={removeCart}
      />
      <Sidebar show={sideBar} onClick={sidebarHandler} />
      <main className={styles.Home}>
        <Images />
        <ProductDetail addtoCart={cartHandler} />
      </main>
    </>
  );
};

export default Home;
