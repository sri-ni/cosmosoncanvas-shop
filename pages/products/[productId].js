import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Product.module.css'

import { IoMdArrowRoundBack } from 'react-icons/io';

import { useCart } from '../../hooks/use-cart.js';

import products from '../../shared/products.json';
import {FaShoppingCart} from "react-icons/fa";

export default function Product({ product }) {

  const { id, title, image, price, description } = product;

  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title } - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Click me
      </button>


      <main className={styles.main}>

        <div className='container'>
          <Link href="/cart">
            <a className='flex items-center'>
              <FaShoppingCart className="flex-shrink-0 mr-3" />
              Back
            </a>
          </Link>
        </div>

      <Link href="/">
          <a className={styles.back}>
            <IoMdArrowRoundBack /> Back
          </a>
        </Link>


        <div className={styles.productImage}>
          <img src={image} alt={title} />
        </div>

        <div>
          <h1>
            { title }
          </h1>

          <p className={styles.description}>
            { description }
          </p>

          <p className={styles.description}>
            ${ price.toFixed(2) }
          </p>

          <p>
            <button className={styles.button} onClick={() => addToCart({ id })}>
              Buy
            </button>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps({ params = {} }) {
  const product = products.find(({ id }) => `${id}` === `${params.productId}`);
  return {
    props: {
      product
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    const { id } = product;
    return {
      params: {
        productId: id,
      },
    };
  });

  return {
    paths,
    fallback: false
  };
}
