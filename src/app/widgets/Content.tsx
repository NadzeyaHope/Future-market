import React from 'react';
import Description from '@/app/shared/Description';
import CountContent from '@/app/shared/CountContent';
import ButtonModal from '@/app/shared/ButtonModal';
import Image from 'next/image';

const Content = () => {
	return (
		<div className={'mt-[176px] flex'}>
			<div className={'max-w-[800px]'}>
				<h1 className={'text-5xl text-white'}>
					Создаю условия для вашего успеха
				</h1>
				<div className={'mt-[53px]'}/>
				<Description className={'border-l-1 space-y-7 text-white pl-6'}>
					Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш
					успех зависит от ваших действий
				</Description>
				<div className={'mt-[64px]'}/>
				<ButtonModal/>
				<div className={'mt-[115px]'}/>
				<CountContent/>
			</div>
			<Image alt={'mentor'} className={'w-[525px] ml-[84px]'} src={'/mentor2.png'}/>
		</div>
	);
};

export default Content;