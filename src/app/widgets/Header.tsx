'use client'
import React from 'react';
import Logo from '@/app/shared/Logo';
import Navbar from '@/app/shared/Navbar';
import PhoneNumber from '@/app/shared/PhoneNumber';
import clsx from 'clsx';
import { montserrat } from '@/app/shared/NextProvider';

const Header = () => {
	return (
		<div className={clsx('max-w-[1320px] flex pt-7 md:pt-10 justify-between md:gap-3',`font-sans ${montserrat.variable}`)}>
			<Logo/>
			<Navbar/>
			<PhoneNumber/>
		</div>
	);
};

export default Header;