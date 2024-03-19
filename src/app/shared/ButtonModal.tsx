'use client';

import React, { useEffect } from 'react';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import ButtonLink from '@/app/shared/ButtonLink';
import ContentForm from '@/app/shared/ContentForm';
import clsx from 'clsx';
import LinkIcon from '@/app/icons/LinkIcon';
import { white } from 'next/dist/lib/picocolors';


const ButtonModal = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	return (
		<div className={'block md:flex space-x-10 justify-between'}>
			<ButtonLink
				onOpen={onOpen}
				lineColor={'#133457'}
				className={'bg-[#FFFFFF]'}
			>
				Записаться на консультацию
				<div className={clsx('h-full w-0.5', `bg-white`)}/>
				<LinkIcon color={'#0B3461'} className={'w-full'}/>
			</ButtonLink>
			<ButtonLink
				onOpen={onOpen}
				className={'bg-opacity-20 bg-[#133457] text-white border-2 border-white'}
				lineColor={'#FFFFFF'}
			>
				Бесплатная консультация
			</ButtonLink>
			<Modal
				backdrop="blur"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				radius="lg"
				size="full"
				className={'w-full md:w-[612px]'}
				classNames={{
					body: 'py-6',
					wrapper: 'justify-start',
					backdrop: 'bg-[#0F1D45]/60 backdrop-opacity-95',
					base: ' border-[#292f46] bg-[#0F1D45] text-white',
					closeButton: 'text-white mt-4 mr-4 opacity-60 text-4xl ',
				}}
			>
				<ModalContent>
					{(onClose) => (
						<ContentForm/>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
};

export default ButtonModal;