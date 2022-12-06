import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import DragDrop from '../components/dragDrop';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import Container from '../components/container'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Head>
          <title>Welcome to Trello</title>
        </Head>
        <main className="app">
          <DragDrop />
          <Container />
        </main>
      </DndProvider>
    </>
  );
}

export default CustomApp;
