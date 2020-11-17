import Head from 'next/head';
import Footer from '../assets/footer';
import Header from '../assets/header';
import styled from 'styled-components';

export default function Home() {
	
	return (
		<MainWrap>
			<Head>
				<meta content="ホームページ制作、ECサイト構築、EC提案、承ります。" name="description"></meta>
				<title>issonuts | OFFICAL</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<div>test</div>
				
			</main>

			<Footer />
		</MainWrap>
	)
}


const MainWrap = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;