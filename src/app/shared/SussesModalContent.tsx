import React from 'react';
import Logo from '@/app/shared/Logo';

const SussesModalContent = () => {
	return (
		<div className={'m-auto text-center w-[200px]  md:w-[447px]'} >
			<p className={'text-2xl md:text-4xl font-semibold'}>Спасибо за заявку</p>
			<div className={'mt-[70px] md:mt-[112px]'}/>
			<p className={'text-2xl md:text-3xl font-semibold'} >Я обязательно свяжусь с вами в ближайшее время</p>
			<div className={'mt-[150px] md:mt-[209px]'}/>
			<Logo className={'ml-24 md:ml-[300px]'}/>
		</div>
	);
};

export default SussesModalContent;