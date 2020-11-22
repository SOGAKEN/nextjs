import React from 'react';
import styled from 'styled-components';

const Footer =()=>{

	let now = new Date();
	let year = now.getFullYear();
	
	return(
		<Foot>&copy;{year} issonuts</Foot>
	)

	
}

export default Footer;

const Foot = styled.footer`
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background:#267BD9;
	color:#fff;
`;