import React from 'react';
import LogoIcon from '@/app/icons/LogoIcon';
import Line from '@/app/shared/Line';

const Logo = () => {
	return (
		<div className={'block m-auto'}>
			<Line/>
			<div className={'mt-2.5'} />
			<LogoIcon/>
			<div className={'mt-2.5'} />
			<Line/>
		</div>
	);
};

export default Logo;