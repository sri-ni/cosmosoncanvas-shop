import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { useCart } from "../hooks/use-cart.js";

import products from "../shared/products.json";


export default function Home() {
  const brand = "Cosmos On Canvas";
  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>{brand}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-7xl font-bold mb-8">{brand}</h1>
        <h4 className="text-3xl font-semibold">
          Unique Space-themed pouring Art on Canvas!
        </h4>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} alt={title} />
                    <h3 className="font-normal">{title}</h3>
                    <p className="font-semibold">${price}</p>
                    <p className="font-light">{description}</p>
                  </a>
                </Link>
                <p>
                  <button
                    className={styles.button}
                    onClick={() => addToCart({ id })}
                  >
                    Add to Cart
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
