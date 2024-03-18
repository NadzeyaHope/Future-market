import React from 'react';
import PhoneIcon from '@/app/icons/PhoneIcon';

const PhoneNumber = () => {
	return (
		<div className={'flex m-auto space-x-4'}>
			<PhoneIcon/>
			<p className={'text-lg m-auto font-semibold text-white'}>
				8-345-123-34-45
			</p>
		</div>
	);
};

export default PhoneNumber;