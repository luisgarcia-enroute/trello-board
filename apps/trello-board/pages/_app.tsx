import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';


import Container from '../components/container'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to Trello</title>
      </Head>
      <main className="app">
        <Container />
      </main>
    </>
  );
}

export default CustomApp;
