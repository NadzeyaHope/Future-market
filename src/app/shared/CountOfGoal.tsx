'use client';
import React from 'react';
import clsx from 'clsx';
import { montserrat } from '@/app/shared/NextProvider';

interface Props {
	count : string;
	children : string;
}
const CountOfGoal = (props : Props) => {
	const {count, children} = props;
	return (
		<div className={clsx('border-l-1 space-y-7 text-white pl-6',`font-sans ${montserrat.variable}`)}>
			<div className={'text-3xl'}>{count}</div>
			<p className={'text-white font-normal text-sm opacity-50'}>{children}</p>
		</div>
	);
};

export default CountOfGoal;