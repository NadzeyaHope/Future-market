'use client';
import React from 'react';
import clsx from 'clsx';
import { montserrat } from '@/app/shared/NextProvider';

interface Props {
	count : string;
	children : string;
}
const CountGBP = (props : Props) => {
	const {count, children} = props;
	return (
		<div className={clsx('border-l-1 space-y-2 md:space-y-7 text-white pl-3 md:pl-6',`font-sans ${montserrat.variable}`)}>
			<div className={'text-sm md:text-3xl font-semibold'}>{count}</div>
			<p className={'text-white font-normal text-xs md:text-sm opacity-50'}>{children}</p>
		</div>
	);
};

export default CountGBP;