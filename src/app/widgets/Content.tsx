import React from 'react';
import CountContent from '@/app/shared/CountContent';
import ButtonModal from '@/app/shared/ButtonModal';

const Content = () => {

	return (
		<div className={'mt-32 relative z-[2] max-w-[300px] md:max-w-[800px] ml:mt-44 flex'}>
			<div className={'w-full'}>
				<h1 className={'text-2xl font-semibold md:text-5xl text-white'}>
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
				<div className={'mt-[93px] md:mt-[115px]'}/>
				<CountContent/>
				<div className={'mt-28'} />
			</div>
		</div>
	);
};

export default Content;