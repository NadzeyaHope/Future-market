import React from 'react';
import Logo from '@/app/shared/Logo';
import Navbar from '@/app/shared/Navbar';
import PhoneNumber from '@/app/shared/PhoneNumber';

const Header = () => {
	return (
		<div className={'flex justify-between gap-3'}>
			<Logo/>
			<Navbar/>
			<PhoneNumber/>
		</div>
	);
};

export default Header;