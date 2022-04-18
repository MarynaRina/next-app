/* eslint-disable @next/next/no-page-custom-font */
import Layout from '../components/Layout';
import Image from 'next/image';
import '../styles/globals.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';


const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout> 
);

export default MyApp;
