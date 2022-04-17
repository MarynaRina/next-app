import Layout from '../components/Layout';
import Image from 'next/image';
import img from '../public/img.png';
import '../styles/globals.scss';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Image src={img} width={500} height={350} alt='preview' placeholder='blur'/>
            <Component {...pageProps} />
        </main>
    </Layout> 
);

export default MyApp;
