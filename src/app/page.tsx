import React from 'react';
import Container from '@/app/shared/Container';
import Header from '@/app/widgets/Header';
import Content from '@/app/widgets/Content';
import { Image } from '@nextui-org/image';

const Home = () => {
	return (
		<Container >
			<Header/>
			<div className={'flex justify-between'} >
				<Content />
					<Image
						className={'w-[275px] bottom-0 md:relative md:w-[625px] md:mt-[100%] fixed right-[-80px] z-[1]'}
						alt={'mentor'}
						src={'/mentor2.png'}
					/>
			</div>
		</Container>
	);
};

export default Home;