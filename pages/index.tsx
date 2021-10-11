import Navbar from 'components/Header';
import Images from 'components/Images';
import ProductDetail from 'components/ProductDetail';

import styles from 'styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles.Home}>
        <Images />
        <ProductDetail />
      </main>
    </>
  );
};

export default Home;
