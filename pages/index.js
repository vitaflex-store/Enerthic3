
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Enerthic - Fitness & Natur</title>
        <meta name="description" content="Fitnesszubehör und natürliche Produkte für deinen aktiven Lebensstil." />
      </Head>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Willkommen bei Enerthic 💪</h1>
        <p>Dein Shop für Fitnesszubehör und natürliche Produkte 🌱</p>
      </main>
      <Footer />
    </>
  );
}
