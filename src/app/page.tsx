import React from 'react';
import Container from '@/app/shared/Container';
import Header from '@/app/widgets/Header';
import Content from '@/app/widgets/Content';

const Home = () => {
	return (
		<Container className={'md:h-full'} >
			<Header/>
			<Content/>
		</Container>
	);
};

export default Home;