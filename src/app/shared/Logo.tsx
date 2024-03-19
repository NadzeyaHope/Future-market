import React from 'react';
import LogoIcon from '@/app/icons/LogoIcon';
import Line from '@/app/shared/Line';
import clsx from 'clsx';

const Logo = ({className} : {className? : string}) => {
	return (
		<div className={clsx('block', className)}>
			<Line/>
			<div className={'mt-2.5'} />
			<LogoIcon/>
			<div className={'mt-2.5'} />
			<Line/>
		</div>
	);
};

export default Logo;