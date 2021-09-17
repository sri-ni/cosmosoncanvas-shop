import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import styles from './Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { subtotal } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">
          <a>Cosmos On Canvas</a>
        </Link>
      </p>
      <p >
        <Link href="/cart">
          <a className='flex items-center'>
            <FaShoppingCart className="flex-shrink-0 mr-3" />
            ${subtotal.toFixed(2)}
          </a>
        </Link>
      </p>
    </nav>
  )
}



export default Nav;
