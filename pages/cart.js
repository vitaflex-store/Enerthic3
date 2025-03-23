
// pages/cart.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import translations from '../translations/cart.json';

export default function Cart() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.de;

  return (
    <>
      <Head>
        <title>{t.title} - Enerthic</title>
      </Head>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.description}</p>
        <div style={styles.emptyCart}>{t.empty}</div>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif'
  },
  title: {
    fontSize: '2rem',
    color: '#00c853',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '40px'
  },
  emptyCart: {
    backgroundColor: '#f8f8f8',
    padding: '40px',
    borderRadius: '12px',
    fontSize: '1rem',
    color: '#888',
    maxWidth: '500px',
    margin: '0 auto'
  }
};
