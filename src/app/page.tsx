import React from 'react';
import Container from '@/app/shared/Container';
import Header from '@/app/widgets/Header';
import Content from '@/app/widgets/Content';

const Home = () => {
	return (
		<Container >
			<Header/>
			<div className={'flex justify-between'} >
				<Content />
					<img
						className={'w-[275px] bottom-0 fixed right-[-80px] z-[1] lg:mt-auto lg:relative lg:h-[808px] lg:w-[525px] bg-fixed'}
						alt={'mentor'}
						src={'/mentor2.png'}
					/>
			</div>
		</Container>
	);
};

export default Home;