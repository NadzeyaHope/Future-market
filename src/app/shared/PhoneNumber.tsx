import React from 'react';
import PhoneIcon from '@/app/icons/PhoneIcon';
import MenuIcon from '@/app/icons/MenuIcon';

const PhoneNumber = () => {
	return (
		<div className={'flex space-x-4'}>
			<MenuIcon className={'flex lg:hidden'}/>
			<PhoneIcon/>
			<p className={'hidden md:block text-lg m-auto font-semibold text-white'}>
				8-345-123-34-45
			</p>
		</div>
	);
};

export default PhoneNumber;