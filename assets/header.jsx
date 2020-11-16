import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header =()=>{
	return(
		<header>
			<nav>
				<input type="checkbox" id="checkbox"/>
				<label for="checkbox" className="checkbtn">
					<FontAwesomeIcon icon={faBars} />
				</label>
				<Tittle><Link href='/'><a>issonuts</a></Link></Tittle>
				<ul>
					<li><a href="#">About</a></li>
					<li><Link href='/contactme' as='contactme.html'><a>Contact Me</a></Link></li>
				</ul>

			</nav>
		</header>
	)
}

export default Header;

const Tittle = styled.label`
	color: #0DF2C9;
	font-size: 35px;
	line-height: $height;
	padding: 0 100px;
	font-weight: bold;
	font-family: 'Abril Fatface', cursive;
	a{
		color: inherit;
	}
`;