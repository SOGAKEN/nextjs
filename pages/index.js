import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Header from '../assets/header';

export default function Home() {
	return (
		<MainWrap>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<h1 className={styles.title}>
					test
				</h1>
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
		</MainWrap>
	)
}

const MainWrap = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;