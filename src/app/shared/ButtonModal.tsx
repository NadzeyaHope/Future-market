'use client';

import React from 'react';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import ButtonLink from '@/app/shared/ButtonLink';
import ContentForm from '@/app/shared/ContentForm';

const ButtonModal = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const name = localStorage.getItem('name') === null ? '' : localStorage.getItem('name');
	const phone = localStorage.getItem('phone') === null ? '' : localStorage.getItem('phone');


	return (
		<div className={'flex space-x-10 justify-between'}>
			<ButtonLink
				onOpen={onOpen}
				lineColor={'#133457'}
				className={'bg-[#FFFFFF]'}
			>
				Записаться на консультацию
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
						<ContentForm
							nameLocal={String(name)}
							phoneLocal={String(phone)}
						/>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
};

export default ButtonModal;