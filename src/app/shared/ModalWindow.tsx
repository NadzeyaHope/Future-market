'use client';
import React from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import ButtonLink from '@/app/shared/ButtonLink';
import CloseIcon from '@/app/icons/CloseIcon';

const ModalWindow = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	return (
		<div className={'flex space-x-2'}>
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
					closeButton: 'hover:bg-white/5 active:bg-white/10 text-white opacity-80',
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
};

export default ModalWindow;