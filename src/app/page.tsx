import React from 'react';
import Container from '@/app/shared/Container';
import Header from '@/app/widgets/Header';
import Description from '@/app/shared/Description';
import ModalWindow from '@/app/shared/ModalWindow';

const Home = () => {
	return (
		<Container>
			<Header/>
			<h1 className={'text-5xl text-white'}>
				Создаю условия для вашего успеха
			</h1>
			<Description>Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий</Description>
			<ModalWindow/>
		</Container>
	);
};

export default Home;