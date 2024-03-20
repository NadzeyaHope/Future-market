import React, { ReactNode } from 'react';
import LinkIcon from '@/app/icons/LinkIcon';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { PressEvent } from '@react-aria/interactions';
import LinkMobileIcon from '@/app/icons/LinkMobileIcon';

interface Props {
	className?: string;
	onOpen: (e: PressEvent) => void;
	children: ReactNode;
	contentColor: string;
}
// <Button
// 							type={'submit'}
// 							size={'lg'}
// 							className={clsx('rounded-none px-3 md:p-0 border-l-0 md:w-[380px] h-[71px] text-lg font-semibold text-[#07305D] bg-opacity-20 bg-[#133457] text-white border-2 border-white')}
// 						>
// 							<div className={'m-auto'}>
// 								Заказать обратный звонок
// 							</div>
// 							<div className={clsx('h-full w-0.5', `bg-[#FFFFFF]`)}/>
// 							<LinkIcon color={'#FFFFFF'} className={'w-full ml-5'}/>
// 						</Button>

const ButtonLink = (props: Props) => {
	const { onOpen, className, children, contentColor, } = props;
	return (
		<>
			<Button
				onPress={onOpen}
				size={'lg'}
				radius={"none"}
				className={clsx('border-2 h-full w-full text-lg font-semibold md:h-[71px] rounded-none md:text-lg', className)}
			>
				<div className={clsx('border-r-1 mr-0 md:mr-4', `border-[${contentColor}]`)}>{children}</div>
				<LinkIcon className={'hidden md:block'} color={contentColor}/>
				<LinkMobileIcon className={'block ml-auto md:hidden'} color={contentColor}/>
			</Button>
		</>
	);
};

export default ButtonLink;