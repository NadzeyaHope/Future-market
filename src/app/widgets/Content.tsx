import React from 'react';
import CountContent from '@/app/shared/CountContent';
import ButtonModal from '@/app/shared/ButtonModal';

const Content = () => {

	return (
		<div className={'mt-32 ml:mt-44 flex'}>
			<div className={'w-full'}>
				<h1 className={'text-2xl font-semibold ml:text-5xl text-white'}>
					Создаю условия для вашего успеха
				</h1>
				<div className={'mt-[53px]'}/>
				<p className={'hidden md:block font-normal text-lg opacity-50 border-l-1 space-y-7 text-white pl-6'}>
					Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш
					успех зависит от ваших действий
				</p>
				<p className={'block ml:hidden text-sm font-normal opacity-50 border-l-1 space-y-7 text-white pl-6'}>
					Ваш успех зависит от ваших действий
				</p>
				<div className={'mt-[64px]'}/>
				<ButtonModal/>
				<div className={'mt-[115px]'}/>
				<CountContent/>
			</div>
			<img alt={'mentor'} className={'w-[275px] h-full lg:w-[525px]'} src={'/mentor2.png'}/>
		</div>
	);
};

export default Content;