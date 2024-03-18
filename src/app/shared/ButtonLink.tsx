import React from 'react';
import LinkIcon from '@/app/icons/LinkIcon';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';

interface Props {
	className?: string;
	onOpen: () => void;
	children: string;
	lineColor : string;
}
//bg-[#133457]
const ButtonLink = (props: Props) => {
	const { onOpen, className, children, lineColor, } = props;
	return (
		<Button
			onPress={onOpen}
			size={'lg'}
			className={clsx('rounded-none p-0 border-l-0 w-[380px] h-[71px] text-lg font-semibold text-[#07305D]', className)}
		>
			<div className={'m-auto'}>
				{children}
			</div>
			<div className={clsx('h-full w-0.5', `bg-[${lineColor}]`)}/>
			<LinkIcon color={lineColor} className={'w-full ml-5'}/>
		</Button>
	);
};

export default ButtonLink;