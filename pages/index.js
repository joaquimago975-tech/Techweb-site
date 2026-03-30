import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Techweb Solutions - Criação de Sites, Apps e Sistemas Web</title>
        <meta name="description" content="Desenvolvemos sites com chatbots inteligentes, sistemas web robustos e aplicações mobile/iOS profissionais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}