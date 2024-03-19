import React from 'react';
import LinkIcon from '@/app/icons/LinkIcon';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { InteractOutsideProps, PressEvent } from '@react-aria/interactions';

interface Props {
	className?: string;
	onOpen: (e : PressEvent)=>void;
	children: string;
	lineColor : string;
}

const ButtonLink = (props: Props) => {
	const { onOpen, className, children, lineColor, } = props;
	return (
		<Button
			onPress={onOpen}
			size={'lg'}
			className={clsx('text-sm max-w-[380px] h-[30px] rounded-none md:h-[71px] md:text-lg font-semibold text-[#07305D]', className)}
		>
				{children}
		</Button>
	);
};

export default ButtonLink;