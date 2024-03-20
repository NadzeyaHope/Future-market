'use client';

import React, { useEffect } from 'react';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import ButtonLink from '@/app/shared/ButtonLink';
import ContentForm from '@/app/shared/ContentForm';
import clsx from 'clsx';
import LinkIcon from '@/app/icons/LinkIcon';
import { white } from 'next/dist/lib/picocolors';
import { Button } from '@nextui-org/button';


const ButtonModal = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	return (
			<div className={'block max-w-[200px] md:w-full space-y-4 md:space-y-0 md:flex gap-10 justify-between'}>
				<div>
					<ButtonLink
						onOpen={onOpen}
						contentColor={'#07305D'}
						className={'bg-[#FFFFFF] p-0'}
					>
						<div>
							<p className={'hidden md:block m-auto text-md py-6 px-4 '}>Записаться на консультацию</p>
							<p className={'block md:hidden px-9 font-semibold text-sm py-2'}>Записаться</p>
						</div>
					</ButtonLink>
				</div>
				<div>
					<ButtonLink
						onOpen={onOpen}
						contentColor={'#FFFFFF'}
						className={'bg-[#133457] bg-opacity-20 border-white  p-0'}
					>
						<div className={'flex'}>
							<p className={'hidden md:block text-white m-auto text-md py-6  px-4 '}>Бесплатная консультация</p>
							<p className={'block md:hidden text-white px-[17px] font-semibold text-sm py-2'}>Заказать звонок</p>
						</div>
					</ButtonLink>
				</div>
				<div>
				</div>
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
					closeButton: 'text-white mt-4 mr-4 opacity-60 text-lg md:text-4xl ',
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