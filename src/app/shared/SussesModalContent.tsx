import React from 'react';
import Logo from '@/app/shared/Logo';

const SussesModalContent = () => {
	return (
		<div className={'m-auto text-center w-[447px]'} >
			<p className={'text-4xl font-semibold'}>Спасибо за заявку</p>
			<div className={'mt-[112px]'}/>
			<p className={'text-3xl font-semibold'} >Я обязательно свяжусь с вами в ближайшее время</p>
			<div className={'mt-[209px]'}/>
			<Logo className={'ml-[300px]'}/>
		</div>
	);
};

export default SussesModalContent;