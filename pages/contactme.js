import Head from 'next/head';
import Footer from '../assets/footer';
import Form from '../assets/form';
import Header from '../assets/header';

export default function Home() {
	
	return (
		<div className='main-wrap'>
			<Head>
				<meta content="issonutsのお問い合わせページです。" name="description"></meta>
				<title>issonuts | CONTACT</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<Form />
				
			</main>

			<Footer />
		</div>
	)
}