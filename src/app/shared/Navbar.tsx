'use client';
import React from 'react';
import clsx from 'clsx';
import { montserrat } from '@/app/shared/NextProvider';

const Navbar = () => {
	return (
			<nav
				className={clsx('hidden lg:flex opacity-80 m-auto text-sm text-white space-x-7 font-normal', `font-sans ${montserrat.variable}`)}>
				<div>Обо мне</div>
				<div>Наставничество</div>
				<div>Мероприятия</div>
				<div>Кейсы</div>
				<div>Отзывы</div>
				<div>Контакты</div>
			</nav>
	);
};

export default Navbar;